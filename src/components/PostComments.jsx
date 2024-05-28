import '../styles/PostComments.css';
import {PostActions} from "./PostActions";
import {CommentTile} from "./CommentTile";

export const PostComments = () => {
    return (
        <div className='post-comments'>
            <div className='comments-list'>
                <CommentTile content={'This is a demo comment hahahah. Another line'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/>
            </div>
            <div className="comments-footer">
                <div className="new-comment">
                    <textarea placeholder='Type your comment...' className='comments-input' />
                    <button className="create-comment-button">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <PostActions postId={1}/>
            </div>
        </div>
    )
}