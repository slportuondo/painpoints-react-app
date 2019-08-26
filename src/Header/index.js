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


	render() {	
		return (
			<div>
				<div 
					style={{
						backgroundColor: 'lightblue',
						width: 100,
						height: 100,
						display: 'inline-block'
					}}

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
				<button onClick={this.handleLogout}>Logout</button>
			</div>
		)
	}
}


export default withRouter(Header)