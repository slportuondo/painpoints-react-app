import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const PainpointList = (props) => {

	const allPainpoints = props.painpoints.map((ppc, i) => {
	
		let eachCategory = ppc.categories.map((cat, idx) => {
			return (
				<div key={idx}>
					<button className='ppCatButton'>
						{cat.category}
					</button>
				</div>
			)
		})

		return (
			<div className='ppContainer' key={i}>
				<h2 className='ppTitle'><Link to={`/painpoint/${ppc.painpoint.id}`}>{ppc.painpoint.head}</Link></h2>
				<div className='ppInfo'>
					<p className='ppInfoBody'>{ppc.painpoint.body}</p>
					<p>{ppc.painpoint.attachment}</p>
					<div className='ppCatButtonGroup'>
						{
							parseInt(props.userId) === ppc.painpoint.owner.id ?
							<div className='ppInfoEditDelete'>
								<Icon 
									onClick={() => props.editingPainpoint(ppc)}
									name='edit'
									size='large'
									link
								/>
								<Icon 
									onClick={() => props.destroyPainpoint(i, ppc.painpoint.id)}
									name='trash alternate'
									size='large'
									link
								/>
							</div>
							: <div className='ppInfoEditDelete'></div>
						}
						<div className='ppInfoCats'>{eachCategory}</div>
					</div>
				</div>
			</div>
		)
	})


	return (
		<div>
			<h1 style={{marginTop: '20px'}}>ALL PAINPOINTS</h1>
			{allPainpoints}
		</div>
	)
}



export default PainpointList
