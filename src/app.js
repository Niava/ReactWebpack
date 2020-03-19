import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './style/main.css'

class App extends Component {
    render() {
        return (
            <div className="site -hero page">
            hellow world
            </div>
        );
    }
};
  
ReactDOM.render(<App />, document.getElementById('root'));