import '../styles/PostCard.css';

export const PostCard = () => {
    const imgUrl = 'https://images.unsplash.com/photo-1715588103170-a86bd7a71db4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const additionalAttachmentUrl = 'https://images.unsplash.com/photo-1715586041798-9583f0642747?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const remAttachmentUrl = 'https://images.unsplash.com/photo-1715760407683-9435ede6be95?q=80&w=2805&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    let attachmentCount = 3;
    return (
        <div className='post-card-main'>
            <div className="card-header">
                <div className="card-user-wrapper">
                    <img src={'https://api.dicebear.com/8.x/micah/svg?seed=Patches'} alt='profile'/>
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
            <div className="card-actions">
                <div className="card-action-buttons">
                    <div className='card-btn comment-button'>
                        <i className="fa-solid fa-comments"></i>
                        <span className="comment-count">5</span>
                    </div>
                    <div className="card-btn like-button">
                        <i className="fa-regular fa-heart"></i>
                        <span className="like-count">6</span>
                    </div>
                    <div className="card-btn share-button">
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};