import React from 'react'

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
			<div key={'sol' + i}>
				<div>Head: {sol.head}</div>
				<div>Body: {sol.body}</div>
				<div>Attachment: {sol.attachment}</div><br />
			</div>
		)
	})

	return (
		<div>
			<h3 style={{display: 'inline-block', width: '50%', textAlign: 'center'}}>Your Painpoints</h3>
			<h3 style={{display: 'inline-block', width: '50%', textAlign: 'center'}}>Your Solutions</h3>
			<ul style={{display: 'inline-block', top: '20', width: '50%', padding: 0, listStyleType: 'none', textAlign: 'center'}}>{userPainpoints}</ul>
			<ul style={{display: 'inline-block', top: '20', width: '50%', padding: 0, listStyleType: 'none', textAlign: 'center'}}>{userSolutions}</ul>
		</div>
	)
}


export default ProfileList