import * as React from 'react'

import * as s from './Calendar.styled'

interface ScrollTag {
  text: string
  height: number
}

interface Props {
  align: 'left' | 'right'
  items: ScrollTag[]
}

const SideTagScroll: React.FunctionComponent<Props> = (props) => {
  const [ scrollHeight, setScrollHeight ] = React.useState(0)

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollHeight(window.scrollY)
    })
  },[])

  return (
    <s.SideTagScroll>
      { props.items.map(item => 
        <s.SideTag
        height={Math.max(item.height, scrollHeight)}
        // height={item.height}
        align={props.align}
        >
          {item.text}
        </s.SideTag>
      )}
    </s.SideTagScroll>
  )
} 

export default SideTagScroll