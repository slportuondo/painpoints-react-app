import React from 'react'
// import { Link } from 'react-router-dom';

class SignIn extends React.Component {

	toRegister = (e) => {
		this.props.history.push('/user/register')
	}

	toLogin = (e) => {
		this.props.history.push('/user/login')
	}

	render () {
		return (
			<div>
				<h1>Sign In</h1>
				<button onClick={this.toRegister}>Create an account</button>
				<button onClick={this.toLogin}>Log in</button>
			</div>
		)
	}
}






export default SignIn