import styled, { css } from 'styled-components'

import { 
  HEADER_HEIGHT, 
  GRID_HEIGHT, 
  MID_APP_WIDTH, 
  LARGE_APP_WIDTH,
  MEDIA,
  NO_SELECT
} from '../../utils/style'


export const Calendar = styled.div`
  margin: auto;
  max-width: ${MID_APP_WIDTH}px;
  ${NO_SELECT}

  @media ${MEDIA.TABLET_LANDSCAPE} {
    max-width: ${LARGE_APP_WIDTH}px;
  }
  
`

export const CalendarGrid = styled.div`
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;

  width: 100%;
  @media ${MEDIA.DESKTOP_SMALL} {
    width: calc(${MID_APP_WIDTH}px * 0.7);
  }

  @media ${MEDIA.TABLET_LANDSCAPE} {
    width: calc(${LARGE_APP_WIDTH}px * 0.8);
  }
`

export const DaysHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 2;

  font-family: cursive;
  font-size: 20px;
  color: white;
  font-weight: 700;

  width: 100%;
  @media ${MEDIA.DESKTOP_SMALL} {
    width: calc(${MID_APP_WIDTH}px * 0.7);
  }

  @media ${MEDIA.TABLET_LANDSCAPE} {
    width: calc(${LARGE_APP_WIDTH}px * 0.8);
  }
`

export const DayHeaderCell = styled.div`
  width: calc(100% / 7);
  text-align: center;
  height: ${HEADER_HEIGHT}px;
  overflow: hidden;
`

export const DaysBody = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
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

  width: ${props => props.showRightBorder ? 'calc((100% / 7) - 1px)' : 'calc(100% / 7)'};
  height: ${props => props.showBottomBorder ? `calc(${GRID_HEIGHT}px - 1px)` : `${GRID_HEIGHT}px`};

  background-color: ${props => props.greyOut && 'grey'};

  border-bottom: ${props => props.showBottomBorder && '1px solid #555'};
  border-right: ${props => props.showRightBorder && '1px solid #555'};
`

export const DayCellInterior = styled.div`
  height: 100%;

  border-radius: 4px;
  color: white;

  transition: all .2s ease-in;
  :hover {
    background-color: rgba(255,255,255, 0.3);
  }
`

export const SideTagScroll = styled.div`
  height: 100%;
  width: calc(${MID_APP_WIDTH}px * 0.15);
  /* display: inline-block; */
  position: relative;

  display: none;
  @media ${MEDIA.DESKTOP_SMALL} {
    display: inline-block;
  }

  @media ${MEDIA.TABLET_LANDSCAPE} {
    width: calc(${LARGE_APP_WIDTH}px * 0.1);
  }
`

interface SideTagProps {
  align: 'left' | 'right'
  height: number
  stickToTop: boolean
  visible: boolean
}

export const SideTag = styled.div<SideTagProps>`
  text-align: ${props => props.align};
  position: ${props => props.stickToTop ? 'fixed' : 'absolute'};
  font-family: cursive;
  font-size: 20px;
  color: white;
  font-weight: 700;

  transition: opacity .1s ease-in;
  opacity: ${props => props.visible ? '1' : '0'};

  /* background-color: white; */
  width: 100px;
  margin: auto;

  top: ${props => props.stickToTop ? `calc(${HEADER_HEIGHT}px + 15px)` : `${props.height}px`};

`

export const BackGroundTagList = styled.div`
  height: 100%;
  position: relative;

  display: inline-block;
  @media ${MEDIA.DESKTOP_SMALL} {
    display: none;
  }
`

interface BackgroundTagProps {
  align: 'left' | 'right'
  height: number
}

export const BackgroundTag = styled.div<BackgroundTagProps>`
  position: absolute;
  top: ${props => `${props.height}px`};
  text-align: ${props => props.align};
  font-family: cursive;
  color: white;

  color: rgba(255,255,255, 0.2);
  font-size: 60px;

  z-index: -2;
`