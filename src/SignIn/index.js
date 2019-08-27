import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import './signIn.css'


class SignIn extends React.Component {

	toRegister = (e) => {
		this.props.history.push('/user/register')
	}

	toLogin = (e) => {
		this.props.history.push('/user/login')
	}

	render () {
		return (
			<Container
				text
				verticalAlign='middle' 
				textAlign='center'
				className='signin_container'
			>
			
				<Header
					as='h1'
					content='PAINPOINT'
					style={{
						fontSize: '3em',
						fontColor: 'black',
						fontWeight: 'normal',
						marginBottom: 0
					}}
				/>
				<Header
					as='h2'
					content='Sign In Page'
					style={{
						fontSize: '1.6em',
						fontWeight: 'normal'
					}}
					className='subtitle'
				/>
				<Button primary size='huge' style={{backgroundColor: '#bababa'}} onClick={this.toLogin}>
					Login
				</Button>
				<Button primary size='huge' style={{backgroundColor: '#6f2f9b'}} onClick={this.toRegister}>
					Register
				</Button>
			</Container>
		)
	}
}






export default SignIn