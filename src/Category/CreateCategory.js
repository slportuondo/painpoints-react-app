import React from 'react'


class CreateCategory extends React.Component {
	constructor() {
		super()

		this.state = {
			category: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.createCategory(this.state)
	}

	render() {
		console.log(this.state, '<--- this.state in create category');
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					type='text' 
					name='category' 
					placeholder='Category' 
					value={this.state.category} 
					onChange={this.handleChange}
				/>
				<button>Create</button>
			</form>
		)
	}
}

export default CreateCategory