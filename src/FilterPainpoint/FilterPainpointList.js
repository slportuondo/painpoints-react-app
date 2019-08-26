import React from 'react'

const FilterPainpointList = (props) => {
	console.log(props, '<--- props');

	const filteredPainpoints = props.painpoints.map((painpoint, i) => {
		return(
			<div key={i}>
				<div>{painpoint.painpoint.head}</div>
				<div>{painpoint.painpoint.body}</div>
				<div>{painpoint.painpoint.attachment}</div>		
			</div>
		)
	})

	return (
		<div>
			<h3>List of Pain Points</h3>
			<div>{filteredPainpoints}</div>
		</div>
	)
}

export default FilterPainpointList