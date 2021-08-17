const UserMessage = ({ msg }) => {
  return <div className='user-message'>
    <div className="message bg-primary">{msg.message}</div>
    <div className="from-user">{msg.user}</div>
  </div>
}

export default UserMessage;
