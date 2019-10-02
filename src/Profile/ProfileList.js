import React from 'react'
import { Grid, Container, List } from 'semantic-ui-react'

const ProfileList = (props) => {

	const userPainpoints = props.painpoints.map((pp, i) => {
		return (
			<div 
				key={'pp' + i}
				className='profile-item'
				id='profile-pp-item'
			>
				<div style={{width: '100%'}}>Head: {pp.head}</div>
				<div style={{width: '100%'}}>Body: {pp.body}</div>
				<div style={{width: '100%'}}>Attachment: {pp.attachment}</div>
			</div>
		)
	})

	const userSolutions = props.solutions.map((sol, i) => {
		return (
			<div 
				key={'sol' + i} 
				className='profile-item'
				id='profile-sol-item'
			>
				<div style={{width: '100%'}}>Head: {sol.head}</div>
				<div style={{width: '100%'}}>Body: {sol.body}</div>
				<div style={{width: '100%'}}>Attachment: {sol.attachment}</div>
			</div>
		)
	})

	return (
		<div className='profile-list'>
			<div 
				className='profile-pp-sol'
				id='profile-painpoint'
			>
				<div 
					className='profile-title'
					id='profile-title-painpoint'
				>YOUR PAINPOINTS</div>
				<div>{userPainpoints}</div>
			</div>
			<div 
				className='profile-pp-sol'
				id='profile-solution'
			>
				<div 
					className='profile-title'
					id='profile-title-solution'
				>YOUR SOLUTIONS</div>
				<div>{userSolutions}</div>
			</div>
		</div>
	)
}


export default ProfileList