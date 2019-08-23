import React from 'react'
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor() {
		super()

		this.state = {
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

		this.props.login(this.state)
		this.props.history.push('/tags')
	}

	render() {
		console.log(this.state, '<---- this.state in Login');
		return (
			<div>
				<h2>Login Page</h2>
					<form onSubmit={this.handleSubmit}>
						<input 
							type='text' 
							name='username' 
							placeholder='Username' 
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
						<button>Log in</button>
					</form>
					<message>
						Not a member? <Link to='/user/register'>Register Here!</Link>
					</message>
			</div>
		)
	}

}



export default Login