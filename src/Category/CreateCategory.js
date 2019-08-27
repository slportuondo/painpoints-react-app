import React from 'react'
import {Input, Form, Button} from 'semantic-ui-react'

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
			<Form onSubmit={this.handleSubmit}>
				<Input
					type='text'
					name='category'
					placeholder='Category'
					value={this.state.category}
					onChange={this.handleChange}
				/>
				<Button>Create</Button>
			</Form>
		)
	}
}

export default CreateCategory
