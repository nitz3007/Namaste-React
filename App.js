import React from 'react';
import ReactDOM from 'react-dom/client';

//creating React Element without JSX
// const heading3 = React.createElement("h3",
// {
//     id: "title3",
//     key:"h3"
// },
// "Heading 3");

// const heading2 = React.createElement("h2",
// {
//     id: "title2",
//     key: "h2"
// },
// "Heading 2");

// const heading1 = React.createElement("h1",
// {
//     id: "title1",
//     key: "h1"
// },
// "Heading 1");
// const header = React.createElement("div",
// {
//     className: "title"
// },
// [heading1, heading2, heading3]);

// same above code for creating a header element using JSX
// const header = (<div className='title'>
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
// </div>);

//rendering the JSX element
// const root = ReactDOM.createRoot(document.getElementById('root'));
// passing react element into root
// root.render(header);

//Functional component for the same above code
const HeaderComponent = () => {
    return (
        <div className='title'>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    );
}

//rendering the functional component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>)
