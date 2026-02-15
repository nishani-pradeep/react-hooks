import React, { useContext, useState } from 'react';
import {ThemeContext} from './ThemeContext';


function ContextExample() {

   
    const {theme, toggleTheme} = useContext(ThemeContext);
    const themeStyles = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        borderRadius: '5px',
        marginTop: '20px'
    }

    return (
        <div>
            <h2>Context Hook example</h2>
       
            <button onClick={()=>toggleTheme(theme)}> Toggle Theme </button>

            <div>
                <span className={`theme-indicator ${theme}`}>Current Theme is -:{theme}</span>

                <div className="content-box" style={themeStyles}>
                    <p>This is some content</p>
                </div>
            </div>


        </div>
    );
}


export default ContextExample;