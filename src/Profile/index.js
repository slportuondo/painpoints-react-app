import React from 'react'

class Profile extends React.Component {
	constructor() {
		super()

		this.state = {
			username: '',
			fullName: '',
			painpoints: [],
			solutions: []
			// profile picture
		}
	}

	componentDidMount() {
		this.getUserInfo()
	}

	getUserInfo = async () => {

		console.log(this.props, '<--- this.props in profile');
		try {
			// const userInfoResponse = await fetch('http://localhost:8000/user' + {this.props.id})

		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return(
			<h1>User Profile Page</h1>
		)
	}
}



export default Profile