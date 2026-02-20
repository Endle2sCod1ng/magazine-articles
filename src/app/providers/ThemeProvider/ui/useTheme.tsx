import { useContext, useState } from "react"
import { ThemeContext } from "./ThemeContext"
import { LOCAL_STORAGE_THEME_KEY, Theme } from "./ThemeProvider"
interface UseThemeResult {
  theme: Theme
  changeTheme: () => void
}
export function useTheme(): UseThemeResult {
  
  const [theme, setTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | "dark")

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }


  return { theme, changeTheme }
}