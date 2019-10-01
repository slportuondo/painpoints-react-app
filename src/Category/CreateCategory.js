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
			[e.target.name]: e.target.value.toLowerCase()
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.createCategory(this.state)

		this.setState({
			category: ''
		})
	}

	render() {
		console.log(this.state, '<--- this.state in create category');
		return (
			<div className='create-category'>
				<Form onSubmit={this.handleSubmit}>
					<Input
						type='text'
						name='category'
						placeholder='Category'
						value={this.state.category}
						onChange={this.handleChange}
					/>
					<Button style={{marginLeft: '10px'}}>Create</Button>
				</Form>
			</div>
		)
	}
}

export default CreateCategory
