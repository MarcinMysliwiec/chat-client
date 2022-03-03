const ConnectedUsers = ({ users }) => <div className='user-list'>
  <h4>Connected Users</h4>
  {users.map(obj => <h6 key={obj.socketId}>{obj.username}</h6>)}
</div>

export default ConnectedUsers;
