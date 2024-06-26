import {Header} from "./Header";
import '../styles/ProfilePage.css';
import {ProfilePicture} from "./ProfilePicture";
import {TabView} from "./TabView";
import {PostCard} from "./PostCard";
import {UserPosts} from "./UserPosts";
import {UserComments} from "./UserComments";

export const ProfilePage = () => {
    return (
        <div className='profile-page-main'>
            <Header />
            <div className='profile-page-body'>
                <div className="user-info">
                    <ProfilePicture picture={'https://api.dicebear.com/8.x/micah/svg?seed=Patches'} size={70}/>
                    <h1 className='user-info-name'>Samarth</h1>
                </div>
                <TabView tabOne='Posts' tabTwo='Comments' compOne={<UserPosts />} compTwo={<UserComments />}/>
            </div>
        </div>
    )
}