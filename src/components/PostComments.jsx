import '../styles/PostComments.css';
import {PostActions} from "./PostActions";
import {CommentTile} from "./CommentTile";
import { useState, useEffect } from 'react';

import { Comment } from '../models/Comment';

export const PostComments = (props) => {
    const postId = props.postId;
    const [comments, setComments] = useState([]);

    const [commentContent, setCommentContent] = useState('');

    useEffect(() => {
        Comment.getCommentsForPost(postId).then((newComments) => {
            setComments(newComments.map((comment, i) => <CommentTile key={i} content={comment.content} author={comment.author}/>));
        });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Creating comment...');
        Comment.createComment(commentContent, 'demo3', postId).then((newComment) => {
            setComments([...comments, <CommentTile key={comments.length} content={newComment.content} author={newComment.author}/>]);
        });
        setCommentContent('');
        console.log('Comment created');
    }

    return (
        <div className='post-comments'>
            <div className='comments-list'>
                {comments}
                {/* <CommentTile content={'This is a demo comment hahahah. Another line'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/>
                <CommentTile content={'Demo comment'}/> */}
            </div>
            <div className="comments-footer">
                <form className="new-comment" onSubmit={handleSubmit}>
                    <textarea placeholder='Type your comment...' className='comments-input' value={commentContent} onChange={(e) => setCommentContent(e.target.value)}/>
                    <button className="create-comment-button" type='submit'>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
                <PostActions postId={postId}/>
            </div>
        </div>
    )
}