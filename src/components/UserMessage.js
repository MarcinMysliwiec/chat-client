const UserMessage = ({ msg, userData }) => {
  return <div className='user-message'>
    <div className="message bg-primary">{msg.message}</div>
    <div className="from-user">{msg.author.name}</div>
  </div>
}

export default UserMessage;
