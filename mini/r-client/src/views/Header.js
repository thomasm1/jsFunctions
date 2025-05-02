import React from 'react';
// import {   useLocation } from 'react-router-dom';
import { styles } from '../config';

const Header = () =>  {
    // const location = useLocation(); 
        return (
            <div>
                <header className="app-header">
                    <div className="header-content row">
                        <h6 style={{color: styles.h6.color}}>DAILYTECH WRITER</h6> 
                    </div>
                    <hr />
                    <hr />
                </header>
            </div>
        ); 
}

export default  Header; 
