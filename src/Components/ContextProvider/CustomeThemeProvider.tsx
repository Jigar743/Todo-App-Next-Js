import React, { createContext, useCallback, useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { dark, light } from "@/styles/colors";

export interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context as ThemeContextData;
};

export default function CustomeThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    console.log(theme.title);
    // console.log({ theme });
    setTheme((prevTheme) => (prevTheme.title === "light" ? dark : light));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
