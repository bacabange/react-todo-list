import React, { Component } from 'react';
import '../styles/TodoBox.css';

class TodoBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todoText: ''
		};
	}
	render() {
		return (
			<div className="TodoBox">
				<form>
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

export default TodoBox;
