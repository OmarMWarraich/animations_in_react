import React from 'react';
import './App.css';

import { Example1, Example2, Example3, Playground } from './components'

const App = () => {

    return (
            <div className="container">
                {/* <Example1 /> 
                <Example2 /> 
                <Example3 /> */}
                <Playground/>
            </div>
    );
}

export default App;
