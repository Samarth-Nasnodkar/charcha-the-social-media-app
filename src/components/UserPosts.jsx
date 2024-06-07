import {PostCard} from "./PostCard";

export const UserPosts = (props) => {
    const userId = props.userId ?? 1;
    const posts = [<PostCard />, <PostCard />, <PostCard />];
    return (
        <div className="user-posts-main">
            {posts}
        </div>
    )
}