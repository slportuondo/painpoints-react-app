import React from 'react'


const SolutionsList = (props) => {

	const allSolutions = props.solutions.filter(sol => sol.painpoint.id === parseInt(props.painpointId))
		.map((solution, i) => {
			return(
				<div className='solContainer' key={i}>
					<h2 
						className='ppTitle' 
						style={{backgroundColor: '#62806A'}}
					>{solution.head}</h2>
					<div className='ppInfo'>
						<p className='ppInfoBody'>{solution.body}</p>
						<p className='ppInfoFile'>{solution.attachment}</p>
					</div>
				</div>
			)
		})

	return (
		<div>
			{allSolutions}
		</div>
	)
}



export default SolutionsList
