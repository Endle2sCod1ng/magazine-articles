import { ReactNode, useMemo, useState } from "react"
import { ThemeContext } from "./ThemeContext"
import { useTheme } from "./useTheme"

interface ThemeProviderProps {
  children: ReactNode
}
export type Theme = "light" | "dark"
export const LOCAL_STORAGE_THEME_KEY = "theme"

export const ThemeProvider = (
  { children }: ThemeProviderProps
) => {
  const { theme, changeTheme } = useTheme()

  const defaultProps = useMemo(() => {
    return { theme, changeTheme }
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
