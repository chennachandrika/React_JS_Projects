import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const APPOINTMENTS_IMG =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png'

class Appointments extends Component {
  state = {appointmentsList: [], isStarredSelected: false, title: '', date: ''}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onchangeDate = event => {
    this.setState({date: event.target.value})
  }

  onChangeStarredStatus = id => () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(appointmentData => {
        if (appointmentData.id === id) {
          return {...appointmentData, isStarred: !appointmentData.isStarred}
        }
        return appointmentData
      }),
    }))
  }

  getStarredAppointments = () => {
    this.setState(prevState => ({
      isStarredSelected: !prevState.isStarredSelected,
    }))
  }

  renderAppointmentListUI = () => {
    const {appointmentsList, isStarredSelected} = this.state
    let renderedList = appointmentsList
    if (isStarredSelected) {
      renderedList = appointmentsList.filter(
        appointmentDate => appointmentDate.isStarred === true,
      )
    }
    console.log(renderedList)
    return (
      <ul className="appointments-list-container">
        {renderedList.map(appointmentData => (
          <AppointmentItem
            key={appointmentData.id}
            appointmentData={appointmentData}
            onChangeStarredStatus={this.onChangeStarredStatus}
          />
        ))}
      </ul>
    )
  }

  onSubmitAddAppointment = event => {
    event.preventDefault()
    const {appointmentsList} = this.state
    let {title, date} = this.state
    title = title !== '' ? title : ''
    date = date !== '' ? date : new Date()
    const newAppointmentData = {
      id: uuidV4(),
      title,
      date,
      isStarred: false,
    }

    this.setState({
      appointmentsList: [...appointmentsList, newAppointmentData],
      title: '',
      date: '',
    })
  }

  renderAppointmentFormUI = () => {
    const {title, date} = this.state
    return (
      <div className="appointment-form">
        <h1>Add Appointment</h1>
        <form onSubmit={this.onSubmitAddAppointment}>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <br />
            <input
              onChange={this.onChangeTitle}
              type="text"
              value={title}
              placeholder="Title"
            />
          </div>
          <div className="input-field">
            <label htmlFor="date">DATE</label>
            <br />
            <input
              id="date"
              onChange={this.onchangeDate}
              type="date"
              value={date}
              placeholder="DATE"
            />
          </div>
          <button
            className="button"
            onClick={this.onSubmitAddAppointment}
            type="button"
          >
            Add
          </button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="appointments">
          <div className="appointment-form-container">
            {this.renderAppointmentFormUI()}
            <img
              className="appointments-img"
              src={APPOINTMENTS_IMG}
              alt="appointments"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="appointments-list-container-header">
            <h1>Appointments</h1>
            <button onClick={this.getStarredAppointments} type="button">
              Starred
            </button>
          </div>
          {this.renderAppointmentListUI()}
        </div>
      </div>
    )
  }
}

export default Appointments
