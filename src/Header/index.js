import React from 'react'
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

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
		return (
			<div className='nav'>
				<div className='nav-items'>
					<Icon 
						name='user circle'
						className='nav-profile'
					/>
					<div 
						className='nav-button'
						id='nav-home'
					>HOME</div>
					<div 
						className='nav-button' 
						id='nav-ind'
					>INDUSTRIES</div>
				</div>
				<div className='nav-title'>PAINPOINTS</div>
				<div 
					className='nav-button'
					id='nav-logout'
				>LOGOUT</div>
			</div>
		)
	}
}


export default withRouter(Header)