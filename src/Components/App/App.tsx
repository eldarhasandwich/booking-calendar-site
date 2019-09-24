import * as React from 'react';
import * as agent from 'superagent'

import Calendar from '../Calendar/Calendar'
import config from '../../Config/production.json'

import * as s from './App.styled'

enum HttpStatus {
  Loading,
  Error,
  Success
}

interface AppConfig {
  title: string
}

const App: React.FunctionComponent = () => {
  const [ getConfigStatus, setGetconfigStatus ] = React.useState(HttpStatus.Loading)
  const [ appconfig, setAppConfig ] = React.useState<AppConfig | null>(null)

  React.useEffect(() => {
    const configHost = config.configHost
    agent
      .get(configHost)
      .end((err, res) => {
        console.log({ err, res })
        if (err || !res) {
          setGetconfigStatus(HttpStatus.Error)
          return
        }
        const c = JSON.parse(res.text)
        setAppConfig(c)
        setGetconfigStatus(HttpStatus.Success)
      })
  }, [])

  if (getConfigStatus === HttpStatus.Loading) {
    return (
      <div>
        Loading
      </div>
    )
  }

  if (getConfigStatus === HttpStatus.Error || !appconfig) {
    return (
      <div>
        Error
      </div>
    )
  }

  return (
    <>
      <s.AppBackground/>
      <Calendar/>
    </>
  )
}

export default App;
