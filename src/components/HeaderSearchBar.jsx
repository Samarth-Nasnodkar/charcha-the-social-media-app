import '../styles/HeaderSearchBar.css';

export const HeaderSearchBar = () => {
    return (
        <div className='header-sb'>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input className='header-search-input' type='text' placeholder='Search'/>
        </div>
    );
};