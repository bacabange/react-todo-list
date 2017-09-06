import React, { Component } from 'react';
import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';

import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoBox />
                <TodoList />
            </div>
        );
    }
}

export default App;
