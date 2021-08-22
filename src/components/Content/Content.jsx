import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Content = () => {
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const contentStyle = isLightTheme ? light : dark;
    return (
        <div
            style={{
                height: '500px',
                ...contentStyle,
            }}
        >
            <h1>Content</h1>
        </div>
    );
};

export default Content;
