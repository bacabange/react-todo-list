import React, { Component } from 'react';
import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';

import './styles/App.css';

class App extends Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        let todoListValue = this.refs.todobox.getInputValue();
        console.log(todoListValue);
    }

    render() {
        return (
            <div className="App">
                <TodoBox ref="todobox" onSubmit={ this.onSubmit } />
                <TodoList />
            </div>
        );
    }
}

export default App;
