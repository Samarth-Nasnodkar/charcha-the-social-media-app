import '../styles/CommentTile.css';

export const CommentTile = (props) => {
    const content = props.content;
    const author = props.author;
    return (
        <div className="comment-tile-wrapper">
            <img src={author.profile_picture} alt='profile'/>
            <div className='comment-tile-main'>
                <div className="user-details">
                    <h3>{author.name}</h3>
                </div>
                <div className="comment-content">
                    {content}
                </div>
            </div>
        </div>
    );
}