import React from 'react'
import { Link } from 'react-router-dom'

const FilterPainpointList = (props) => {
	console.log(props, '<--- props');

	const filteredPainpoints = props.painpoints.map((painpoint, i) => {
		return(
			<div key={i}>
				<div><Link to={'/painpoint/' + painpoint.painpoint.id}>{painpoint.painpoint.head}</Link></div>
				<div>{painpoint.painpoint.body}</div>
				<div>{painpoint.painpoint.attachment}</div>
				<div>{painpoint.category.category}</div><br />	
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