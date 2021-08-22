import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;

    console.log('theme:', theme);
    const headerStyle = isLightTheme ? light : dark;

    return (
        <div style={headerStyle}>
            <button onClick={toggleTheme}>Toggle theme</button>
            Header
        </div>
    );
};

export default Header;
