import React from 'react'
import { Button } from 'semantic-ui-react'


class SignIn extends React.Component {

	toRegister = (e) => {
		this.props.history.push('/user/register')
	}

	toLogin = (e) => {
		this.props.history.push('/user/login')
	}

	render () {
		return (
			<div className='signIn'>
				<div 
					className='signInSpace'
				></div>
				<div className='signinContainer'>
					<h1 className='signInTitle'>SIGN IN TO PAIN POINTS</h1>
					<Button 
						className='signInLoginButton'
						size='huge' 
						onClick={this.toLogin}
					>
						LOGIN
					</Button>
					<Button
						className='signInRegisterButton'
						size='huge' 
						onClick={this.toRegister}
					>
						CREATE AN ACCOUNT
					</Button>
				</div>
			</div>
		)
	}
}






export default SignIn