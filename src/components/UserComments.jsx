import {CommentTile} from "./CommentTile";

export const UserComments = (props) => {
    const userId = props.userId ?? 1;
    const comments = [
        <CommentTile content={'Demo comment'}/>,
        <CommentTile content={'Demo comment'}/>,
        <CommentTile content={'Demo comment'}/>,
        <CommentTile content={'Demo comment'}/>
    ];
    return (
        <div className='user-comments-main' style={{width:'40%'}}>
            {comments}
        </div>
    )
}