import React from 'react'

class CreateSolution extends React.Component {
	constructor() {
		super()

		this.state = {
			head: '',
			body: ''
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.addSolution(this.state)
	}

	render() {
		console.log(this.state, '<--- this.state in CreateSolution');
		return (
			<div>
				<h2>Create Solution Form</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						name='head'
						placeholder='Solution Title'
						value= {this.state.head}
						onChange={this.handleChange}
					/><br />
					<textarea
						type='text'
						name='body'
						placeholder='Solution Description'
						value= {this.state.body}
						onChange={this.handleChange}
					/><br />
					<button>Create</button>
				</form>
			</div>
		)
	}
}



export default CreateSolution
