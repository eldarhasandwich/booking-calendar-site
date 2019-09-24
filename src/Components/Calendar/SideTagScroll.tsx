import * as React from 'react'

import * as s from './Calendar.styled'

interface ScrollTag {
  text: string
  height: number
}

export interface Props {
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
      { props.items.map((item, index) => {
        const nextItem = props.items[index + 1]
        const nextItemVisible = !!nextItem ? nextItem.height > scrollHeight + 30 : true

        return (
          <s.SideTag
            key={index}
            stickToTop={item.height < scrollHeight}
            height={item.height}
            align={props.align}
            visible={nextItemVisible}
          >
            {item.text}
          </s.SideTag>
        )}
      )}
    </s.SideTagScroll>
  )
} 

export default SideTagScroll