import '../styles/PostCard.css';
import { useNavigate } from 'react-router-dom';
import {PostActions} from "./PostActions";
import {ProfilePicture} from "./ProfilePicture";
import {User} from "../models/User";
import { Post } from '../models/Post';
import { useState, useEffect } from 'react';

export const PostCard = (props) => {
    // const imgUrl = 'https://images.unsplash.com/photo-1715588103170-a86bd7a71db4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // const additionalAttachmentUrl = 'https://images.unsplash.com/photo-1715586041798-9583f0642747?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // const remAttachmentUrl = 'https://images.unsplash.com/photo-1715760407683-9435ede6be95?q=80&w=2805&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // console.log(process.env.REACT_APP_HOST_URL);
    const postId = props.postId;
    const [post, setPost] = useState(new Post());
    const disableActionButtons = props.actionDisable ?? false;
    const userId = props.userId ?? 1;
    const navigate = useNavigate();

    const routeToUserProfilePage = () => {
        navigate('/profile/' + userId);
    };
    // console.log(user);

    useEffect(() => {
        Post.getPostById(postId).then((post) => {
            setPost(post);
        });
    }, []);

    return (
        <div className='post-card-main'>
            <div className="card-header">
                <div className="card-user-wrapper">
                    {/*<img src={'https://api.dicebear.com/8.x/micah/svg?seed=Patches'} alt='profile'/>*/}
                    <div className="card-user-img">
                        <ProfilePicture picture={post.author.profile_picture} alt="profile" />
                    </div>
                    <div className="card-text">
                        <div className="card-handle" onClick={routeToUserProfilePage}>
                            <span className="handle-name">{post.author.name}</span>
                            <span className="handle-username">@{post.author.name}</span>
                        </div>
                        <div className="card-content">
                            {post.content}
                        </div>
                    </div>
                </div>
                <div className="time-posted">Just Now</div>
            </div>
            <div className="card-attachments">
                {post.attachments.length > 0 &&
                    <div className="primary-attachment">
                        <img src={post.attachments[0]} alt='attachment'/>
                    </div>
                }
                {post.attachments.length > 1 &&
                    <div className="secondary-attachment">
                        <img src={post.attachments[1]} alt='attachment'/>
                        {post.attachments.length > 2 &&
                            <div className="rem-attachments">
                                <img src={post.attachments[2]} alt='attachment'/>
                                <div className="rem-count">{`+${post.attachments.length - 2}`}</div>
                            </div>
                        }
                    </div>
                }
            </div>
            {
                !disableActionButtons
                &&
                <PostActions postId={postId}/>
            }
        </div>
    );
};