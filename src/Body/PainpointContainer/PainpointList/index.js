import React from 'react'
// import EditPainpoint from '../EditPainpoint'
// import { Link } from 'react-router-dom'

const PainpointList = (props) => {

	const allPainpoints = props.painpoints.map((ppc, i) => {
		let eachCategory = ppc.categories.map((cat, idx) => <li key={idx}>{cat.category}</li>)

		return (
			<div key={i}>
				<li >
						<h2>{ppc.painpoint.head}</h2>
						<h3>{ppc.painpoint.body}</h3>
						<h3>{ppc.painpoint.attachment}</h3>
						<button onClick={
							() => {
								props.setPainpointToEdit(i)
							}
						}>Edit</button>
					<button onClick={
							() => {
								props.destroyPainpoint(i, ppc.painpoint.id)
							}
						}>Delete</button>
					<ul>{eachCategory}</ul>
				</li>
			</div>
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
