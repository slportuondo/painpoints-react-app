import React from 'react'


const PainpointList = (props) => {

	console.log(props.painpoints, '<---- props.painpoints');

	// const allPainpoints = props.painpoints.map((painpoint, i) => {
	// 	return (
	// 		<li key={i}>
	// 			<div>
	// 				<h3>{painpoint.painpoint.head}</h3>
	// 				<p>{painpoint.painpoint.body}</p>
	// 				<p>{painpoint.category.category}</p>
	// 			</div>
	// 		</li>
	// 	)
	// })

	const allPainpoints = props.painpoints.filter(pp => pp.category.id !== 2)
	.map((painpoint, i) => {
		return (
			<li key={i}>
				<div>
					<h3>{painpoint.painpoint.head}</h3>
					<p>{painpoint.painpoint.body}</p>
					<p>{painpoint.category.category}</p>
				</div>
			</li>
		)
		
	})




	return (
		<div>
			<h3>List of Painpoints</h3>
			<ul>{allPainpoints}</ul>
		</div>

	)
}





export default PainpointList