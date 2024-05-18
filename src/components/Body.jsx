import '../styles/Body.css';
import {PostCard} from "./PostCard";
import {OnlineUsers} from "./OnlineUsers";

export const Body = () => {
    return (
        <div className='body-main'>
            <div className="body-content">
                <PostCard />
                <PostCard />
            </div>
            <div className="body-extras">
                <OnlineUsers />
            </div>
        </div>
    );
};