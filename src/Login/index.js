import React from 'react'

class Login extends React.Component {
	constructor() {
		super()

		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}

	render() {
		return (
			<div>
				<h2>Login Page</h2>
					<form>
						<input 
							type='text' 
							name='username' 
							placeholder='Username' 
							value={this.state.username} 
						/><br />
						<input 
							type='text' 
							name='email' 
							placeholder='e.g. example@email.com' 
							value={this.state.email}
						/><br />
						<input 
							type='text' 
							name='password' 
							placeholder='Password' 
							value={this.state.password}
						/>
						<button>Log in</button>
					</form>
			</div>
		)
	}

}



export default Login