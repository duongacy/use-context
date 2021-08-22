import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const footerStyle = isLightTheme ? light : dark;

    return <div style={{ height: '100px', marginTop: '10px', ...footerStyle }}>Footer</div>;
};

export default Footer;
