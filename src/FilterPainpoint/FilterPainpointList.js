import React from 'react'
import { Link } from 'react-router-dom'

const FilterPainpointList = (props) => {
	const filterButtons = props.filter.map((filt, i) => {
		return (
			<div id='filterButton' className='cat-button' key={i}>
				{filt.category}
			</div>
		)
	})

	const filteredPainpoints = props.painpoints.map((painpoint, i) => {
		return(
			<div key={i} className='ppContainer'>
				<h2 className='ppTitle'><Link to={'/painpoint/' + painpoint.painpoint.id}>{painpoint.painpoint.head}</Link></h2>
				<div className='ppInfo' style={{paddingBottom: '25px'}}>
					<p className='ppInfoBody'>{painpoint.painpoint.body}</p>
					<p>{painpoint.painpoint.attachment}</p>
				</div>	
			</div>
		)
	})

	return (
		<div className='filterPainpointHome'>
			<div className='filterPainpointList'>
				{filteredPainpoints}
			</div>
			<div className='filterList'>
				{filterButtons}
			</div>
		</div>
	)
}

export default FilterPainpointList