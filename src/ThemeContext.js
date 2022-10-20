import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider(props)
{
    const[theme,setTheme] = useState('light');
    const toogleTheme = ()=>{
        setTheme(theme==='light'?'dark':'light');
    };
    return <ThemeContext.Provider value={{theme,toogleTheme}}>
    {props.children}
    </ThemeContext.Provider>
}

export {ThemeContext,ThemeContextProvider}