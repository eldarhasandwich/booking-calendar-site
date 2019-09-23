import * as React from 'react'

import * as s from './Calendar.styled'
import { Props } from './SideTagScroll'

const BackgroundTags: React.FunctionComponent<Props> = (props) => {
  return (
    <s.BackGroundTagList>
    { props.items.map(item => 
      <s.BackgroundTag
        key={item.text}
        height={item.height}
        align={props.align}
      >
        {item.text}
      </s.BackgroundTag>
    )}
  </s.BackGroundTagList>
  )
}

export default BackgroundTags