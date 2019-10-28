import React from 'react'
import { Link } from 'react-router-dom'

class Register extends React.Component {
	constructor() {
		super()

		this.state = {
			full_name: '',
			username: '',
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = async (e) => {
		e.preventDefault()

		const data = new FormData();

		data.append("full_name", this.state.fullName);
		data.append("username", this.state.username);
		data.append("email", this.state.email);
		data.append("password", this.state.password);

		this.props.register(data);

	}

	render() {
		return (
			<div className='register-login'>
				{
					this.props.userAlreadyExists ?
					<div className='loginError'>A user with that email already exists</div>
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
						name='full_name' 
						placeholder='FULL NAME'
						value={this.state.fullName}
						onChange={this.handleChange}
					/>
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
				<Link to='/user/login' className='loginOrRegister'>Already a user? Log in here!</Link>
			</div>
		)
	}
}




export default Register;
