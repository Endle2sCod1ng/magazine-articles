import { createContext } from 'react';
import { Theme } from "./ThemeProvider";
interface ThemeContextProps {
  theme?: Theme,
  changeTheme?: () => void
}
export const ThemeContext = createContext<ThemeContextProps>({});