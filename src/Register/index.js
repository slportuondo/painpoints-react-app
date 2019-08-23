import React from 'react'
import { Link } from 'react-router-dom';

class Register extends React.Component {
	constructor() {
		super()

		this.state = {
			fullName: '',
			username: '',
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		const data = new FormData();

		data.append("full_name", this.state.fullName);
		data.append("username", this.state.username);
		data.append("email", this.state.email);
		data.append("password", this.state.password);

		for (let pair of data.entries()){
			console.log(pair[0] ,', ', pair[1]);
		}

		this.props.register(data);

		this.props.history.push('/main')
	}

	render() {
		console.log(this.state, '<---- this.state in register');
		return (
			<div>
				<h2>Register Page</h2>
				<form onSubmit={this.handleSubmit}>
					<input 
						type='text' 
						name='fullName' 
						placeholder='Full name' 
						value={this.state.fullName}
						onChange={this.handleChange} 
					/><br />
					<input 
						type='text' 
						name='username' 
						placeholder='Pick a username' 
						value={this.state.username}
						onChange={this.handleChange}
					/><br />
					<input 
						type='text' 
						name='email' 
						placeholder='e.g. example@email.com' 
						value={this.state.email}
						onChange={this.handleChange}
					/><br />
					<input 
						type='password' 
						name='password' 
						placeholder='Password' 
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button>Register</button>
				</form>
				<div>
					Already a member? <Link to='/user/login'>Login</Link>
				</div>
			</div>
		)
	}
}




export default Register;



