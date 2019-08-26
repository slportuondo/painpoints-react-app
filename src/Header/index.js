import React from 'react'
import { withRouter } from 'react-router-dom';

// const Header = (props) => {
class Header extends React.Component {
	constructor() {
		super()

		this.state = {
			loggedIn: true
		}
	}

	handleLogout = (e) => {
		e.preventDefault()

		this.props.logout()
		console.log(this.props);

		const { history } = this.props
		if (history) history.push('/user/login')
	}


	render() {	
		// const { history } = this.props
		return (
			<div>
				<div 
					style={{
						backgroundColor: 'lightblue',
						width: 100,
						height: 100,
						display: 'inline-block'
					}}>
					Profile
				</div>
				<div 
					style={{
						backgroundColor: 'lavender',
						width: 100,
						height: 100,
						display: 'inline-block'
					}}
					>
					Home
				</div>
				<div 
					style={{
						backgroundColor: 'gray',
						width: 100,
						height: 100,
						display: 'inline-block'
					}}>
					Industries
				</div>
				<button onClick={this.handleLogout}>Logout</button>
			</div>
		)
	}
}


export default withRouter(Header)