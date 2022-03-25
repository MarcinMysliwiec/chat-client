const BotMessage = ({ msg }) => {
  return <div className="message bot">
    <div
      className={`message ${msg.type === 'CONNECTION' ? 'connection' : ''} ${msg.type === 'DISCONNECTION' ? 'disconnection' : ''}`}>{msg.message}</div>
  </div>;
};

export default BotMessage;
