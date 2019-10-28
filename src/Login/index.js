import React from 'react'
import { Link } from 'react-router-dom'

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
	}

	render() {
		return (
			<div className='register-login'>
				{
					this.props.incorrectLogin ?
					<div className='loginError'>Incorrect login information</div>
					: null
				}
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
				<Link to='/user/register' className='loginOrRegister'>Not a user? Register here!</Link>
			</div>
		)
	}

}



export default Login