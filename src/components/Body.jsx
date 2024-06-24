import '../styles/Body.css';
import {PostCard} from "./PostCard";
import {OnlineUsers} from "./OnlineUsers";

export const Body = () => {
    const defaultPostId = 'd29ab367-3ee5-44d2-b8ff-6af625956e3e'
    return (
        <div className='body-main'>
            <div className="body-content">
                <PostCard postId={defaultPostId}/>
                <PostCard postId={defaultPostId}/>
            </div>
            <div className="body-extras">
                <OnlineUsers />
            </div>
        </div>
    );
};