"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("light")

    const toggleMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"))
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            <div className={`theme ${mode}`}>
            {children}
            </div>
        </ThemeContext.Provider>
    )

}
