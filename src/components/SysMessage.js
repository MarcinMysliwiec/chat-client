const SysMessage = ({ msg }) => {
  return <div className='sys-message'>
    <div className="message">{msg.message}</div>
  </div>
}

export default SysMessage;
