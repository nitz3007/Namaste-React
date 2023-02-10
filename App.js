import React from 'react';
import ReactDOM from 'react-dom/client';

const AppLayout = () => {
    return (
        <h1>Hello</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
//passing react element into root
root.render(<AppLayout/>);
