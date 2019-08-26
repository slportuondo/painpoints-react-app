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

	goToCategories = (e) => {
		e.preventDefault()

		const { history } = this.props
		if (history) history.push('/categories')
	}

	goHome = (e) => {
		e.preventDefault()

		const { history } = this.props
		if (history) history.push('/painpoints')
	}

	goToProfile = (e) => {
		e.preventDefault()

		const { history } = this.props
		if (history) history.push('/user/' + this.props.userId)
	}


	render() {	
		console.log(this.state, '<---- state in Header');
		// <button onClick={this.handleLogout}>Logout</button>
		return (
			<div>
				<div 
					style={{
						backgroundColor: 'lightblue',
						width: 100,
						height: 100,
						display: 'inline-block'
					}}
					onClick={this.goToProfile}
					>
					Profile
				</div>
				<div 
					style={{
						backgroundColor: 'lavender',
						width: 100,
						height: 100,
						display: 'inline-block'
					}}
					onClick={this.goHome}
					>
					Home
				</div>
				<div 
					style={{
						backgroundColor: 'gray',
						width: 100,
						height: 100,
						display: 'inline-block'
					}}
					onClick={this.goToCategories}
					>
					Industries
				</div>
				<div 
					style={{
						backgroundColor: 'beige',
						width: 100,
						height: 100,
						display: 'inline-block'
					}}
					onClick={this.handleLogout}
					>
					Logout
				</div>
			</div>
		)
	}
}


export default withRouter(Header)