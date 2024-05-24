import '../styles/PostComments.css';
import {PostActions} from "./PostActions";

export const PostComments = () => {
    return (
        <div className='post-comments'>
            <div className='comments-list'>Comments</div>
            <PostActions postId={1}/>
        </div>
    )
}