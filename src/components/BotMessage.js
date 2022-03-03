const BotMessage = ({ msg }) => {
  return <div className='bot-message'>
    <div className="message">{msg.message}</div>
  </div>
}

export default BotMessage;
