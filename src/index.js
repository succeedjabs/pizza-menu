import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);