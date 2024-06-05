import '../styles/TabView.css';
import {useState} from 'react';

export const TabView = (props) => {
    const tabOne = props.tabOne;
    const tabTwo = props.tabTwo;
    const compOne = props.compOne;
    const compTwo = props.compTwo;
    const [selectedTab, setSelectedTab] = useState(0);
    const displayTab = () => {
        if (selectedTab === 0) {
            return compOne;
        }
        return compTwo;
    }
    return (
        <div className='tv-main'>
            <div className="tab-headers">
                <h1 className={selectedTab === 0 ? 'tab-title selected' : 'tab-title'} onClick={() => setSelectedTab(0)}>
                    {tabOne}
                </h1>
                <h1 className={selectedTab === 1 ? 'tab-title selected' : 'tab-title'} onClick={() => setSelectedTab(1)}>
                    {tabTwo}
                </h1>
            </div>
            <div className="spacer"></div>
            <div className="tv-content">
                {displayTab()}
            </div>
        </div>
    )
}