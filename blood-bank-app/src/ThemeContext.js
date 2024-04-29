import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setAuthentication] = useState(null)

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
    }

    const setUser = (user) => {
        setCurrentUser(user)
    }

    const setAuth = (auth) => {
        setAuthentication(auth)
    }

    const themeValue = {
        isDarkMode,
        toggleTheme,
        currentUser,
        setUser,
        isAuthenticated,
        setAuth
    };

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}