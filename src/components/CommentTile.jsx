import '../styles/CommentTile.css';

export const CommentTile = (props) => {
    const content = props.content;
    return (
        <div className='comment-tile-main'>
            <div className="user-details">
                <img src={'https://api.dicebear.com/8.x/micah/svg?seed=Patches'} alt='profile'/>
                <h3>Samarth</h3>
            </div>
            <div className="comment-content">
                {content}
            </div>
        </div>
    );
}