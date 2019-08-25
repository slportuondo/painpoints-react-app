import React from 'react'
import { Link } from 'react-router-dom';

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

		for (let pair of data.entries()){
			console.log(pair[0] ,', ', pair[1]);
		}

		// this.props.register(data);

		// this.props.history.push('/categories')
		try {
	      const registerResponse = await fetch('http://localhost:8000/user/register', {
	        method: 'POST',
	        credentials: 'include',
	        body: data,
	        headers: {
	          'enctype': 'multipart/form-data'
	        }
	      })

	      const parsedResponse = await registerResponse.json();
	      console.log(parsedResponse, '<--- parsedResponse in register');

	      if (parsedResponse) {
	        this.setState({
	          ...parsedResponse.data
	        })
		    this.props.history.push('/user/' + this.state.id)

	        // return parsedResponse

	      } else {
	        console.log('There was an error registering for an account');
	      }

	    } catch (err) {
	      console.log(err)
	    }

	}

	render() {
		console.log(this.state, '<---- this.state in register');
		return (
			<div>
				<h2>Register Page</h2>
				<form onSubmit={this.handleSubmit}>
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
						type='password' 
						name='password' 
						placeholder='Password' 
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button>Register</button>
				</form>
				<div>
					Already a member? <Link to='/user/login'>Login</Link>
				</div>
			</div>
		)
	}
}




export default Register;



