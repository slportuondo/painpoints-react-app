import React from 'react'


const SolutionsList = (props) => {

	const allSolutions = props.solutions.filter(sol => sol.painpoint.id === 1)
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
			<h1>Solutions List</h1>
			<ul>{allSolutions}</ul>	
		</div>
	)
}



export default SolutionsList