import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoBox.css';

class TodoBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoText: ''
		};

        this.onSubmit = this.onSubmit.bind(this);
	}

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(e);
    }

    getInputValue() {
        return this.state.todoText;
    }

	render() {
		return (
			<div className="TodoBox">
				<form onSubmit={ this.onSubmit }>
					<div className="input-group">
                        <input
                            type="text" c
                            className="form-control"
                            value={ this.state.todoText }
                            onChange={ (e) => { this.setState({ todoText: e.target.value }); } } />

                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="submit">Add</button>
                        </span>
                    </div>
				</form>
			</div>
		);
	}
};

TodoBox.PropTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default TodoBox;
