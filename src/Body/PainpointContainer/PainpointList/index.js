import React from 'react'


const PainpointList = (props) => {

	const allPainpoints = props.painpoints.map((ppc, i) => {
		let eachCategory = ppc.categories.map((cat, i) => <li key={i}>{cat.category}</li>)
		console.log(eachCategory, 'eachCategory');

		return (
			<li key={i}>
				<div>
					<h2>{ppc.painpoint.head}</h2>
					<h3>{ppc.painpoint.body}</h3>
					<h3>{ppc.painpoint.attachment}</h3>
				</div>
				<ul>{eachCategory}</ul>
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
