import React from 'react'
import { Link } from 'react-router-dom';
// import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

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
		return (
			<div className='register-login'>
				<form 
					className='signInForms' 
					onSubmit={this.handleSubmit}
					autoComplete='off'
				>
					<input
						className='signInFormInput'
						type='text'
						name='fullName' 
						placeholder='FULL NAME'
						value={this.state.fullName}
						onChange={this.handleChange}
					/>
					<input
						className='signInFormInput'
						type='text'
						name='username' 
						placeholder='USERNAME'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<input 
						className='signInFormInput'
						type="text"
						name='email' 
						placeholder='EMAIL'
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						className='signInFormInput'
						type='password'
						name='password' 
						placeholder='PASSWORD'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button className='signInFormButton'>SUBMIT</button>
				</form>
			</div>
		)
	}
}




export default Register;
