import * as React from 'react'

import { GRID_HEIGHT } from '../../utils/style'

import DayCell from './DayCell'
import * as s from './Calendar.styled'
import SideTagScroll from './SideTagScroll'
import BackgroundTags from './BackgroundTags'

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const WeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

interface Day {
  day: number
  date: number
  month: number
  year: number
}

const Calendar: React.FunctionComponent = () => {

  const today = new Date(Date.now())
  const cells: Array<Day> = []
  const thisMonth = today.getMonth()
  const thisYear = today.getFullYear()
  const monthTags = []
  const yearTags = []
  monthTags.push({ text: Months[thisMonth], height: 0 })
  yearTags.push({ text: thisYear.toString(), height: 0 }) 

  let numberOfSundays = new Date(thisYear, thisMonth, 0).getDay() === 0 ? 1 : 0

  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    const year = thisYear + ( thisMonth + monthIndex < 12 ? 0 : 1 )
    const month = thisMonth + monthIndex - ( thisMonth + monthIndex < 12 ? 0 : 12)
    
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    
    for (let dayIndex = 0; dayIndex < daysInMonth; dayIndex++) {
      const day = new Date(year, month, dayIndex + 1).getDay()
      cells.push({
        day,
        date: dayIndex + 1,
        month: month + 1,
        year
      })

      if (day === 0) {
        numberOfSundays += 1
      }
    }

    if ( monthIndex < 11 ) {
      const i = month + 1 > 11 ? 0 : month + 1
      monthTags.push({ text: Months[i], height: numberOfSundays * GRID_HEIGHT })
    } 

    if ( month === 11 && thisMonth !== 0 ) {
      yearTags.push({ text: (thisYear + 1).toString(), height: numberOfSundays * GRID_HEIGHT }) 
    } 
  }
  const daysAfterSunday = new Date(thisYear, thisMonth).getDay()

  return (
    <s.Calendar>

      <SideTagScroll
        align={'right'}
        items={monthTags}
      />
      
      <BackgroundTags
        align={'left'}
        items={monthTags}
      />

      <s.CalendarGrid>
        <s.DaysHeader>
          { WeekDays.map(d => <s.DayHeaderCell>{d}</s.DayHeaderCell>) }
        </s.DaysHeader>

        <s.DaysBody>
          { Array.from(Array(daysAfterSunday)).map(i => <s.DayCell key={i} greyOut={true} />) }
          { cells.map((cell, index) => {
            const showBottom = index + 7 < cells.length && cells[index].month !== cells[index + 7].month
            const showRight = index + 1 < cells.length && cells[index].month !== cells[index + 1].month && cell.day !== 6
            return (
              <DayCell 
                key={index}
                day={cell.day}
                date={cell.date}
                month={cell.month}
                year={cell.year}
                showBottomBorder={showBottom}
                showRightBorder={showRight}
              />
            )}
          )}
        </s.DaysBody>
      </s.CalendarGrid>

      <SideTagScroll
        align={'left'}
        items={yearTags}
      />

    </s.Calendar>
  )
}

export default Calendar