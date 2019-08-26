import React from 'react'
// import EditPainpoint from '../EditPainpoint'
import { Link } from 'react-router-dom'

const PainpointList = (props) => {

	const allPainpoints = props.painpoints.map((ppc, i) => {
		let eachCategory = ppc.categories.map((cat, idx) => <li key={idx}>{cat.category}</li>)

		return (
			<div key={i}>
				<li>
						<h2><Link to={`/painpoint/${ppc.painpoint.id}`}>{ppc.painpoint.head}</Link></h2>
						<h3>{ppc.painpoint.body}</h3>
						<h3>{ppc.painpoint.attachment}</h3>
						<button onClick={
							() => {
								// console.log(i)
								props.setPainpointToEdit(i)
							}
						}>Edit</button>
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
