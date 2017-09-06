import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';
import '../styles/TodoList.css';

class TodoList extends Component {
	constructor(props) {
	  super(props);
	}
	render() {
		let items = this.props.items.map((currenValue, index, array) => {
			return(
				<TodoListItem name={currenValue} />
			);
		});

		return (
			<div className="TodoList">
				<ul className="list-group">
					{ items }
				</ul>
			</div>
		);
	}
};

TodoList.PropTypes = {
  items: PropTypes.array.isRequired
}

export default TodoList;
