import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content/Content';
import ThemeContextProvider from './components/contexts/ThemeContext';

function App() {
    return (
        <ThemeContextProvider>
            <Header />
            <Content />
            <Footer />
        </ThemeContextProvider>
    );
}

export default App;
