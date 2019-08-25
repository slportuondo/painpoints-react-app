import React from 'react'


const PainpointList = (props) => {
	// const allPainpoints = props.painpoints.filter(pp => pp.category.id === 2)
	// .map((painpoint, i) => {
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
				<ul>CATEGORIES{eachCategory}</ul>
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
