import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('base')

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}




