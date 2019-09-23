import styled from 'styled-components'

import { GRID_HEIGHT } from '../../utils/style'

const HeaderHeight = '40px'


export const Calendar = styled.div`
  max-width: 900px;
  margin: auto;
`

export const CalendarGrid = styled.div`
  display: inline-block;
  width: 80%;
`

export const DaysHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: #FFF;
  width: calc(900px * 0.8);
`

export const DayHeaderCell = styled.div`
  width: calc(100% / 7);
  border: 1px solid black;
  text-align: center;
  height: ${HeaderHeight};
`

export const DaysBody = styled.div`
  padding-top: ${HeaderHeight};
  display: flex;
  flex-wrap: wrap;
`

interface DayCellProps {
  greyOut?: boolean
  showBottomBorder?: boolean
  showRightBorder?: boolean
}

export const DayCell = styled.div<DayCellProps>`
  text-align: center;


  width: ${props => props.showRightBorder ? 'calc((100% / 7) - 2px)' : 'calc(100% / 7)'};
  height: ${props => props.showBottomBorder ? `calc(${GRID_HEIGHT}px - 2px)` : `${GRID_HEIGHT}px`};

  background-color: ${props => props.greyOut && 'grey'};

  border-bottom: ${props => props.showBottomBorder && '2px solid black'};
  border-right: ${props => props.showRightBorder && '2px solid black'};
`

export const SideTagScroll = styled.div`
  height: 100%;
  width: calc(10%);
  display: inline-block;
  position: relative;
`

interface SideTagProps {
  align: 'left' | 'right'
  height: number
}

export const SideTag = styled.div<SideTagProps>`
  text-align: ${props => props.align};
  position: absolute;

  background-color: white;
  width: 90%;
  margin: auto;

  top: ${props => `${props.height}px`};
`