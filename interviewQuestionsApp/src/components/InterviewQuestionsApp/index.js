import {Component} from 'react'
import InterviewQuestion from '../InterviewQuestion'
import Filters from '../Filters'
import './index.css'

class InterviewQuestionsApp extends Component {
  constructor(props) {
    super(props)
    const {questionsData} = this.props
    this.questionsData = questionsData
    this.state = {
      listOfInterviewQuestions: this.questionsData,
      selectedLevel: 'ALL',
      selectedLanguage: 'ALL',
    }
  }

  onSelectLevel = level => {
    this.setState({selectedLevel: level}, this.interviewQuestions)
  }

  onSelectLanguage = language => {
    this.setState({selectedLanguage: language}, this.interviewQuestions)
  }

  renderTheAppBannerUI = () => (
    <div className="app-banner-container">
      <h1 className="app-banner-heading">30 Seconds of Interviews</h1>
      <img
        className="app-banner-img"
        src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
        alt="app banner img"
      />
    </div>
  )

  interviewQuestions = () => {
    const {selectedLevel, selectedLanguage} = this.state
    const {questionsData} = this.props
    let updatedLanguageData = questionsData
    if (selectedLanguage !== 'ALL') {
      updatedLanguageData = questionsData.filter(
        questionData => questionData.language === selectedLanguage,
      )
    }

    let updatedLevelData = updatedLanguageData
    if (selectedLevel !== 'ALL') {
      updatedLevelData = updatedLanguageData.filter(
        questionData => questionData.difficultyLevel === selectedLevel,
      )
    }
    this.setState({listOfInterviewQuestions: updatedLevelData})
  }

  renderInterviewQuestionsUI = () => {
    const {listOfInterviewQuestions} = this.state
    return (
      <ul className="interview-questions-container">
        {listOfInterviewQuestions.map(questionData => (
          <InterviewQuestion
            key={questionData.id}
            questionData={questionData}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {levelsData, categoryData} = this.props
    return (
      <div className="app-container">
        {this.renderTheAppBannerUI()}
        <div className="app-data-container">
          <Filters
            levelsData={levelsData}
            onSelectLevel={this.onSelectLevel}
            categoryData={categoryData}
            onSelectLanguage={this.onSelectLanguage}
          />
          {this.renderInterviewQuestionsUI()}
        </div>
      </div>
    )
  }
}
export default InterviewQuestionsApp
