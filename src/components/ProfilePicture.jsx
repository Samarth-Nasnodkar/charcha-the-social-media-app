import '../styles/ProfilePicture.css';

export const ProfilePicture = (props) => {
    const picUrl = props.picture;
    const size = props.size ?? 35;
    return (
        <div className='profile-pic-main'>
            <img src={picUrl} alt='profile' style={{ width: `${size}px`, height: `${size}px` }} />
        </div>
    )
}