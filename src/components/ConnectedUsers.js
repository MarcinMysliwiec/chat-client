const ConnectedUsers = ({users}) => <div className='user-list'>
  <h4>Zalogowani Użytkownicy</h4>
  <ul>
    {users.map(obj =>
        <li key={obj.socketId}>{obj.username}</li>
    )}
  </ul>

</div>

export default ConnectedUsers;
