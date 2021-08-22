// 1. tạo ra 1 context để tí nữa return về provider có Children
// 2. tạo 1 component provider có chứa data nào đó(data chứa trong state)
// 3. cách sử dụng: dùng provider để bao bọc, dùng context để lấy data

import { createContext, useState } from 'react';

// Bước 1: tạo context
// bước 2: bao bọc component(provider)
// Bước 3: sử dụng context

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        isLightTheme: true,
        dark: {
            backgroundColor: 'black',
            color: 'white',
        },
        light: {
            backgroundColor: 'white',
            color: 'black',
        },
    });

    const toggleTheme = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme,
        });
    };
    const data = {
        theme,
        toggleTheme,
    };
    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
