import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

import Section from '@shared/Section'
import { format, getDay, parseISO } from 'date-fns'

const cx = classNames.bind(styles)

// rerendering 될때마다 다시 생성될 필요가 없으므로 Heading 외부에 선언
const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
