import '../styles/PostActions.css';
import {useNavigate} from "react-router-dom";

export const PostActions = (props) => {
    let navigate = useNavigate();

    function routeComments() {
        const path = '/post/' + props.postId;
        navigate(path);
    }

    return (
        <div className="card-actions">
            <div className="card-action-buttons">
                <div className='card-btn comment-button' onClick={routeComments}>
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
    )
}