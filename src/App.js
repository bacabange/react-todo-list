import React, { Component } from 'react';
import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';

import './styles/App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            todoItems: []
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        let todoListValue = this.refs.todobox.getInputValue();
        let newItem = this.state.todoItems.concat(todoListValue);
        this.setState({ todoItems: newItem });

        this.refs.todobox.setInputValue('');
    }

    render() {
        console.log(this.state.todoItems);
        return (
            <div className="App card">
                <div className="card-body">
                    <h4 className="card-title">To-Do List | ReactJs</h4>

                    <TodoBox ref="todobox" onSubmit={ this.onSubmit } />
                    <TodoList ref="todolist" items={ this.state.todoItems } />
                </div>
            </div>
        );
    }
}

export default App;
