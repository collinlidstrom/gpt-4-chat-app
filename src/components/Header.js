import React from 'react';

export default function Header(props) {

    const toggleTheme = () => document.body.classList.toggle("dark");

    return (
        <div>
            <h1>Collin GPT</h1>
            <button onClick={toggleTheme}><span className="icon"></span>Toggle Theme</button>
        </div>
    )
}