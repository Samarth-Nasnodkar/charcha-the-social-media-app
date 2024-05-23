import {Header} from "./Header";
import {PostCard} from "./PostCard";
import '../styles/PostPage.css';

export const PostPage = () => {
    return (
        <div className='post-page-main'>
            <Header />
            <div className="post-page-body">
                <PostCard />
            </div>
        </div>
    )
}