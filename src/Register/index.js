import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button, Form, Grid, Header, Message, Input, Segment } from 'semantic-ui-react'

class Register extends React.Component {
	constructor() {
		super()

		this.state = {
			fullName: '',
			username: '',
			email: '',
			password: '',
			id: ''
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

		this.props.history.push('/categories')


		// === IF WE WANT TO SHOW THE PROFILE PAGE RIGHT AWAY === //
		// try {
	 //      const registerResponse = await fetch('http://localhost:8000/user/register', {
	 //        method: 'POST',
	 //        credentials: 'include',
	 //        body: data,
	 //        headers: {
	 //          'enctype': 'multipart/form-data'
	 //        }
	 //      })

	 //      const parsedResponse = await registerResponse.json();
	 //      console.log(parsedResponse, '<--- parsedResponse in register');

	 //      if (parsedResponse) {
	 //        this.setState({
	 //          ...parsedResponse.data
	 //        })
		//     this.props.history.push('/user/' + this.state.id)

	 //        // return parsedResponse

	 //      } else {
	 //        console.log('There was an error registering for an account');
	 //      }

	 //    } catch (err) {
	 //      console.log(err)
	 //    }

	}

	render() {
		console.log(this.state, '<---- this.state in register');
		return (
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
						Register an account
					</Header>
					<Form size='large' onSubmit={this.handleSubmit}>
						<Segment stacked>
							<Form.Input 
								type='text'
								name='fullName' 
								placeholder='Full name'
								value={this.state.fullName}
								onChange={this.handleChange}
							/>
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

							<Button color='#279259' fluid size='large'>
								Login
							</Button>
						</Segment>
					</Form>
					<Message>
						Already a user? <Link to='/user/login'>Login Here!</Link>
					</Message>
				</Grid.Column>
			</Grid>
		)
	}
}




export default Register;
