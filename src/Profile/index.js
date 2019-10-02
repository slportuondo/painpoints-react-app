import React from 'react'
import ProfileList from '../Profile/ProfileList'

class Profile extends React.Component {
	constructor() {
		super()

		this.state = {
			username: '',
			fullName: '',
			id: '',
			painpoints: [],
			solutions: []
		}
	}

	componentDidMount() {
		this.getUserInfo()
	}

	getUserInfo = async () => {
	    try {
	      const userInfoResponse = await fetch('http://localhost:8000/user/' + this.props.match.params.id, {
	        method: 'GET',
	        credentials: 'include'
	      })

	      if (userInfoResponse.status !== 200) {
	        throw Error('userInfoResponse does not work')
	      }

	      const parsedUserInfo = await userInfoResponse.json();

	      if (parsedUserInfo) {
	        this.setState({
	          ...parsedUserInfo.data,
	          username: parsedUserInfo.data.user.username,
	          fullName: parsedUserInfo.data.user.full_name,
	          id: parsedUserInfo.data.user.id
	        })
	        return parsedUserInfo.data
	      }

	    } catch (err) {
	      console.log(err);
	    }
	  }

	render() {
		return(
			<div className='profile'>
				<ProfileList painpoints={this.state.painpoints} solutions={this.state.solutions}/>
			</div>
		)
	}
}



export default Profile
