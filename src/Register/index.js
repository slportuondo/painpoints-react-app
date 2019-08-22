import React from 'react'


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

	render() {
		console.log(this.state);
		return (
			<div>
				<h2>Register Page</h2>
				<form>
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
						type='text' 
						name='password' 
						placeholder='Password' 
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button>Register</button>
				</form>
			</div>
		)
	}
}




export default Register