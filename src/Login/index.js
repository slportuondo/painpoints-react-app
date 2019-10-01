import React from 'react'
import { Link } from 'react-router-dom';
// import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

class Login extends React.Component {
	constructor() {
		super()

		this.state = {
			username: '',
			email: '',
			password: '',
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = async (e) => {
		e.preventDefault()

		this.props.login(this.state)

		

		this.props.history.push('/categories')

		// const loginResponse = await fetch('http://localhost:8000/user/login', {
		// 	method: 'POST',
		// 	credentials: 'include',
		// 	body: JSON.stringify(this.state),
		// 	headers: {
		// 	'Content-Type': 'application/json'
		// 	}
		// })

		// const parsedResponse = await loginResponse.json();
		// console.log(parsedResponse, '<---- parsedResponse in login');

		// if (parsedResponse) {
		// 	this.setState({
		// 	...parsedResponse.data
		// 	})

		// 	this.props.history.push('/user/' + this.state.id)

		// } else {
		// 	console.log('Incorrect username and/or password');
		// }

	}

	render() {
		console.log(this.state, '<---- this.state in Login');
		return (
			<div className='register-login'>
				<form 
					className='signInForms' 
					onSubmit={this.handleSubmit}
					autoComplete='off'
				>
					<input
						className='signInFormInput'
						type='text'
						name='username' 
						placeholder='USERNAME'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<input 
						className='signInFormInput'
						type="text"
						name='email' 
						placeholder='EMAIL'
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						className='signInFormInput'
						type='password'
						name='password' 
						placeholder='PASSWORD'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button className='signInFormButton'>SUBMIT</button>
				</form>
			</div>
		)
	}

}



export default Login