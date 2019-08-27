import React from 'react'
import './profile.css'
import { Grid, Container, List } from 'semantic-ui-react'

const ProfileList = (props) => {
	console.log(props, '<--- props in ProfileList');

	const userPainpoints = props.painpoints.map((pp, i) => {
		return (
			<div key={'pp' + i} style={{display: 'inline-block', width: '50%', textAlign: 'center'}}>
				<div>Head: {pp.head}</div>
				<div>Body: {pp.body}</div>
				<div>Attachment: {pp.attachment}</div><br />
			</div>
		)
	})

	const userSolutions = props.solutions.map((sol, i) => {
		return (
			<div key={'sol' + i} style={{display: 'inline-block', width: '50%', textAlign: 'center'}}>
				<div>Head: {sol.head}</div>
				<div>Body: {sol.body}</div>
				<div>Attachment: {sol.attachment}</div><br />
			</div>
		)
	})

	return (
		<Grid columns={2} divided>
			<Grid.Column style={{padding: 0, textAlign: 'center'}}>
				<Container className='list-titles' style={{backgroundColor: '#4f5fd1'}}>Your Painpoints</Container>
				<List className='user-list' style={{display: 'inline-block', top: '20', width: '50%', padding: 0, listStyleType: 'none', textAlign: 'center'}}>{userPainpoints}</List>
			</Grid.Column>
			<Grid.Column style={{padding: 0, textAlign: 'center'}}>
				<Container className='list-titles' style={{backgroundColor: '#62806A'}}>Your Solutions</Container>
				<List className='user-list' style={{display: 'inline-block', top: '20', width: '50%', padding: 0, listStyleType: 'none', textAlign: 'center'}}>{userSolutions}</List>
			</Grid.Column>
		</Grid>
	)
}


export default ProfileList