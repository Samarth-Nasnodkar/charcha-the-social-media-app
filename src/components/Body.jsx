import '../styles/Body.css';
import {PostCard} from "./PostCard";

export const Body = () => {
    return (
        <div className='body-main'>
            <PostCard />
            <PostCard />
        </div>
    );
};