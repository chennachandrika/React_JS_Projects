import './index.css'

const TabItem = props => {
  const {tabItem, activeTabId, onChangeTab} = props
  const onClickTab = event => {
    onChangeTab(event.target.id)
  }

  return (
    <li>
      <button
        onClick={onClickTab}
        className={`tab-button ${activeTabId === tabItem.tabId && 'active'}`}
        type="button"
        id={tabItem.tabId}
      >
        {tabItem.displayText}
      </button>
    </li>
  )
}

export default TabItem
