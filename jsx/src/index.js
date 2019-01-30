// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = function() {
    const buttonText = 'Click me!';

    return (
    <div>
        <label className="label" for="name"
        >Enter name:
        </label>
        <input id="name" type="text" />
        <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText}
        </button>
    </div>);
}

// Take the component and show it on screen
ReactDOM.render(<App />, document.querySelector('#root'));