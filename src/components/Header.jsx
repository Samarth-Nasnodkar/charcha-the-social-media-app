import '../styles/Header.css';
import {HeaderSearchBar} from "./HeaderSearchBar";
import {useNavigate} from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();
    const routeHome = () => {
        navigate('/');
    };
    return (
        <div className='header-wrapper'>
            <div className='header-main'>
                <div className="title-section">
                    <div className="header-title" onClick={routeHome}>
                        Charcha
                        <span className="header-title-icon">
                            &#73;
                        </span>
                    </div>
                    <HeaderSearchBar />
                </div>
                <div className="header-right">
                    <div className="profile-section">
                        <div className='profile-btn compose-button'>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </div>
                        <div className="profile-btn notifications">
                            <i className="fa fa-bell" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <img src={'https://api.dicebear.com/8.x/micah/svg?seed=Patches'} alt='profile'/>
                        <div className="vert-divider"></div>
                        <div className="profile-username">{'Samarth'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
