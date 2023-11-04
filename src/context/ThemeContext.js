import React, { createContext, useContext, useState } from "react"

const ThemeContext = createContext()
const ContextTheme = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false)

    const themeHandler = () => {
        setDarkTheme((prev) => !prev)
    }

  return (
    <ThemeContext.Provider value={{darkTheme, themeHandler}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ContextTheme

export const GetThemeValues = () => useContext(ThemeContext)