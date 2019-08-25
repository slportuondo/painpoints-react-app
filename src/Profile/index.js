import React from 'react'

class Profile extends React.Component {
	constructor() {
		super()

		this.state = {
			username: '',
			fullName: '',
			id: '',
			painpoints: [],
			solutions: []
			// profile picture
		}
	}

	componentDidMount() {
		this.props.getUserInfo()
	}

	render() {
		return(
			<h1>User Profile Page</h1>
		)
	}
}



export default Profile