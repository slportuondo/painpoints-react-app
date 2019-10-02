import React from 'react'
import { Link } from 'react-router-dom'
import { Button, List, Grid, Container } from 'semantic-ui-react'

const PainpointList = (props) => {

	const allPainpoints = props.painpoints.map((ppc, i) => {
		console.log(ppc.painpoint, '<---- ppc.id');
		let eachCategory = ppc.categories.map((cat, idx) => {
			return (
							<div key={idx}>
								<Button disabled size='small' color='green'>
									{cat.category}
								</Button>
							</div>
						)
		})
		return (
			<div key={i}>
				<Grid.Row>
					<h2><Link to={`/painpoint/${ppc.painpoint.id}`}>{ppc.painpoint.head}</Link></h2>
					<Container>
						{ppc.painpoint.body}
					</Container>
					<Container>
						{ppc.painpoint.attachment}
					</Container>
					<Container>
						<Button.Group>{eachCategory}</Button.Group>
					</Container>
					{
						props.userId == ppc.painpoint.owner.id ? 
						<Container>
							<Button onClick={() => props.setPainpointToEdit(i)}>Edit</Button>
							<Button onClick={() => props.destroyPainpoint(i, ppc.painpoint.id)}>Delete</Button>
						</Container>
						: null
					}
				</Grid.Row>
			</div>
		)
	})


	return (
		<div>
			<h1>ALL PAINPOINTS</h1>
			{allPainpoints}
		</div>
	)
}



export default PainpointList
