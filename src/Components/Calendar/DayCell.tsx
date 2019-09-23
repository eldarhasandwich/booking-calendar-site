import * as React from 'react'

import * as s from './Calendar.styled'

interface Props {
  day: number
  date: number
  month: number
  year: number
  showBottomBorder?: boolean
  showRightBorder?: boolean
}

const DayCell: React.FunctionComponent<Props> = (props) => {

  return (
    <s.DayCell
      showBottomBorder={props.showBottomBorder}
      showRightBorder={props.showRightBorder}
    >
      { `${props.date}` }
    </s.DayCell>
  )
}

export default DayCell