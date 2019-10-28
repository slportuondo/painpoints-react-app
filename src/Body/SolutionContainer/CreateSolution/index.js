import React from 'react'

class CreateSolution extends React.Component {
	constructor() {
		super()

		this.state = {
			head: '',
			body: '',
			attachment: ''
		}
	}

	componentDidMount() {
		this.setState({painpoint: parseInt(this.props.painpointId)})
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.addSolution(this.state)
	}

	render() {
		return (
			<div className='solCreateContainer'>
				<form autoComplete='off' onSubmit={this.handleSubmit} className='ppCreateForm'>
					<input
						className='ppCreateFormInputTitle'
						type='text'
						name='head'
						placeholder='Enter solution title here...'
						value= {this.state.head}
						onChange={this.handleChange}
						style={{backgroundColor: '#62806A'}}
					/>
					<textarea
						className='ppCreateFormInputBody'
						type='text'
						name='body'
						placeholder='Solution Description'
						value= {this.state.body}
						onChange={this.handleChange}
					/>
					<div className='ppCreateFormBottom'>
						<input
							className='ppCreateFormInputFile'
							type='attachment'
							name='attachment'
							placeholder='attach file'
							value= {this.state.attachment}
							onChange={this.handleChange}
						/>
						<button
							className='ppCreateSubmit'
						>Create</button>
					</div>
				</form>
			</div>
		)
	}
}



export default CreateSolution
