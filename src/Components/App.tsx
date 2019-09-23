import * as React from 'react';
import * as agent from 'superagent'

import config from '../Config/production.json'

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

        setAppConfig(res.body)
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
    <div>
      { appconfig.title }

      This is an app
    </div>
  )
}

export default App;
