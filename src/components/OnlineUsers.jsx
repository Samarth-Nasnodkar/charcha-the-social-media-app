import '../styles/OnlineUsers.css';

export const OnlineUsers = () => {
    const onlineUserCount = 10;
    const onlineUsers = [];
    for (let i = 0; i < onlineUserCount; i++) {
        onlineUsers.push(
            {
                profileUrl: 'https://api.dicebear.com/8.x/micah/svg?seed=Patches',
                username: 'Samarth'
            }
            );
    }
    return (
        <div className='online-users-main'>
            <div className="online-users-title">Online Users</div>
            <div className="online-users-content">
                {
                    onlineUsers.map((onlineUser) => (
                        <div className='online-user-tile'>
                            <img className='online-user-pic' src={onlineUser.profileUrl} alt={onlineUser.username} />
                            <div className="online-user-username">{onlineUser.username}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};