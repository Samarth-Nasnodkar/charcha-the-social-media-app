import '../styles/PostCard.css';
import { useNavigate } from 'react-router-dom';
import {PostActions} from "./PostActions";
import {ProfilePicture} from "./ProfilePicture";

export const PostCard = (props) => {
    const imgUrl = 'https://images.unsplash.com/photo-1715588103170-a86bd7a71db4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const additionalAttachmentUrl = 'https://images.unsplash.com/photo-1715586041798-9583f0642747?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const remAttachmentUrl = 'https://images.unsplash.com/photo-1715760407683-9435ede6be95?q=80&w=2805&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    let attachmentCount = 3;
    let postId = 1;
    const disableActionButtons = props.actionDisable ?? false;

    return (
        <div className='post-card-main'>
            <div className="card-header">
                <div className="card-user-wrapper">
                    {/*<img src={'https://api.dicebear.com/8.x/micah/svg?seed=Patches'} alt='profile'/>*/}
                    <div className="card-user-img">
                        <ProfilePicture picture={'https://api.dicebear.com/8.x/micah/svg?seed=Patches'} alt="profile" />
                    </div>
                    <div className="card-text">
                        <div className="card-handle">
                            Samarth
                            <span className="handle-username">@samarth</span>
                        </div>
                        <div className="card-content">
                            This is my first post!
                        </div>
                    </div>
                </div>
                <div className="time-posted">Just Now</div>
            </div>
            <div className="card-attachments">
                <div className="primary-attachment">
                    <img src={imgUrl} alt='attachment'/>
                </div>
                {attachmentCount > 1 &&
                    <div className="secondary-attachment">
                        <img src={additionalAttachmentUrl} alt='attachment'/>
                        {attachmentCount > 2 &&
                            <div className="rem-attachments">
                                <img src={remAttachmentUrl} alt='attachment'/>
                                <div className="rem-count">{`+${attachmentCount - 2}`}</div>
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