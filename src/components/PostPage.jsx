import {Header} from "./Header";
import {PostCard} from "./PostCard";
import '../styles/PostPage.css';
import {PostComments} from "./PostComments";

export const PostPage = () => {
    return (
        <div className='post-page-main'>
            <Header />
            <div className="post-page-body">
                <PostCard />
                <PostComments />
            </div>
        </div>
    )
}