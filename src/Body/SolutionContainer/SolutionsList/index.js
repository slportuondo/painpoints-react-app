import React from 'react'


const SolutionsList = (props) => {

	const allSolutions = props.solutions.filter(sol => sol.painpoint.id === parseInt(props.painpointId))
		.map((solution, i) => {
			return(
				<li key={i}>
					<div>Head: {solution.head}</div>
					<div>Body: {solution.body}</div>
					<div>Painpoint: {solution.painpoint.head}</div><br />
				</li>
			)
		})

	return (
		<div>
			<h2>Solutions List</h2>
			<ul>{allSolutions}</ul>	
		</div>
	)
}



export default SolutionsList