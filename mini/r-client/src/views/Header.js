import React from 'react';
// import {   useLocation } from 'react-router-dom';

const  Header = () => {
    // const location = useLocation();

    return (
       <div>
            <header className="app-header">
                <div className="header-content">
                    <h6>Write! Header #1</h6>
                </div>
            </header>
       </div>
    );
}

export default React.memo(Header); 
