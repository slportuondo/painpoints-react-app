import React from 'react'
import { Link } from 'react-router-dom';

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
					<div>
						Not a member? <Link to='/user/register'>Register Here!</Link>
					</div>
			</div>
		)
	}

}



export default Login