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
                <textarea rows='5' cols='40' placeholder='Type your comment...' className='comments-input' />
                <PostActions postId={1}/>
            </div>
        </div>
    )
}