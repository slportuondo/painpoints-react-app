import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

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
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
						Log-in to your account
					</Header>
					<Form size='large' onSubmit={this.handleSubmit}>
						<Segment stacked>
							<Form.Input 
								type='text'
								name='username' 
								placeholder='Username'
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<Form.Input
								type='text'
								name='email' 
								placeholder='Email'
								value={this.state.email}
								onChange={this.handleChange}
							/>
							<Form.Input
								type='password'
								name='password' 
								placeholder='Password'
								value={this.state.password}
								onChange={this.handleChange}
							/>

							<Button fluid size='large'>
								Login
							</Button>
						</Segment>
					</Form>
					<Message>
					New to us? <Link to='/user/register'>Register Here!</Link>
					</Message>
				</Grid.Column>
			</Grid>
		)
	}

}



export default Login