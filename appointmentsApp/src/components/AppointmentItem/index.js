import {format} from 'date-fns'

import './index.css'

const STAR =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
const STAR_FILLED =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

const AppointmentItem = props => {
  const {appointmentData, onChangeStarredStatus} = props
  const {title, id, date, isStarred} = appointmentData
  return (
    <li className="appointment-item-container">
      <div className="appointment-item-header">
        <h1>{title}</h1>
        <button onClick={onChangeStarredStatus(id)} testid="star" type="button">
          <img src={isStarred ? STAR_FILLED : STAR} alt="star" />
        </button>
      </div>
      <p>{`DATE: ${format(new Date(date), 'dd MMMM yyyy, EEEE')}`}</p>
    </li>
  )
}

export default AppointmentItem
