import React from 'react'
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

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

		const { history } = this.props
		if (history) history.push('/')
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
		return (
			<div className='nav'>
				<div className='nav-items'>
					<Icon 
						name='user circle'
						className='nav-profile'
						onClick={this.goToProfile}
					/>
					<div 
						className='nav-button'
						id='nav-home'
						onClick={this.goHome}
					>HOME</div>
					<div 
						className='nav-button' 
						id='nav-ind'
						onClick={this.goToCategories}
					>INDUSTRIES</div>
				</div>
				<div className='nav-title'>PAINPOINTS</div>
				<div className='nav-user'>
					<div style={{color: 'white'}}>Signed in as <span style={{fontWeight: 'bold'}}>{this.props.username}</span></div>
					<div 
						className='nav-button'
						id='nav-logout'
						style={{
							display: 'flex',
							alignSelf: 'flex-end',
							marginTop: '10px'
						}}
						onClick={this.handleLogout}
					>LOGOUT</div>
				</div>
			</div>
		)
	}
}


export default withRouter(Header)