import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	name: ''
	  };
	}
	render() {
		return (
			<li className="TodoListItem list-group-item">
				{ this.props.name }
			</li>
		);
	}
};

TodoListItem.PropTypes = {
  name: PropTypes.string.isRequired
}

export default TodoListItem;
