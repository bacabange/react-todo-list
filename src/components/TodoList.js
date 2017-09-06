import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';
import '../styles/TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: this.props.items
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (nextProps.items.length != this.state.items.length) {
			this.setState({ items: nextProps.items });
		}
	}

	render() {
		let items = this.props.items.map((currenValue, index, array) => {
			return(
				<TodoListItem name={currenValue} key={ index }/>
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
