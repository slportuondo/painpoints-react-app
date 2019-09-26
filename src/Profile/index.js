import React from 'react'
import ProfileList from '../Profile/ProfileList'
import { Divider } from 'semantic-ui-react'
import './profile.css'

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
		this.getUserInfo()
	}

	getUserInfo = async () => {
    try {
      const userInfoResponse = await fetch('http://localhost:8000/user/' + this.props.match.params.id, {
        method: 'GET',
        credentials: 'include'
      })
      console.log(userInfoResponse, '<--- userInfoResponse');

      if (userInfoResponse.status !== 200) {
        throw Error('userInfoResponse does not work')
      }

      const parsedUserInfo = await userInfoResponse.json();
      console.log(parsedUserInfo, '<--- parsedUserInfo');

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
		console.log(this.state, '<--- state in profile');
		return(
			<div>
				<h1 style={{textAlign: 'center', margin: '5%', color: '#279259'}}>User Profile Page</h1>
				<Divider />
				<ProfileList painpoints={this.state.painpoints} solutions={this.state.solutions}/>
			</div>
		)
	}
}



export default Profile
