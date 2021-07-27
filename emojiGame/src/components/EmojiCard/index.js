import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onSelectEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  return (
    <li className="emoji-card" onClick={onSelectEmoji(id)}>
      <img className="emoji" src={emojiUrl} alt={emojiName} />
    </li>
  )
}

export default EmojiCard
