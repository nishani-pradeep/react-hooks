import React, { createContext, useState } from "react";    


let themeValues = {
    theme: 'light',
    toggleTheme: () =>{}
}

const ThemeContext = createContext(themeValues);


function ThemeProvider({children}){
   
    const [theme, setTheme] = useState('light');

    const toggleTheme = (currentTheme) => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    themeValues = {theme, toggleTheme};

    return (
        <ThemeContext.Provider value={themeValues}>
            {children}
        </ThemeContext.Provider>
    );
}


export {ThemeContext, ThemeProvider};




