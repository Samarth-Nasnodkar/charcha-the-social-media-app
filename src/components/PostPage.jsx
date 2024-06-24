import {Header} from "./Header";
import {PostCard} from "./PostCard";
import '../styles/PostPage.css';
import {PostComments} from "./PostComments";

export const PostPage = (props) => {
    const postId = 'd29ab367-3ee5-44d2-b8ff-6af625956e3e';
    return (
        <div className='post-page-main'>
            <Header />
            <div className="post-page-body">
                <PostCard actionDisable={true} postId={postId}/>
                <PostComments postId={postId}/>
            </div>
        </div>
    )
}