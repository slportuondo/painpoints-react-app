import React from 'react'
import PainpointList from './PainpointList'
import CreatePainpoint from './CreatePainpoint'

class PainpointContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			painpoints: []
		}
	}

	componentDidMount() {
		this.getPainpoints()
	}

	getPainpoints = async () => {

		try {
			console.log("getPainpoints is working");
			const getPainpointsResponse = await fetch('http://localhost:8000/painpoints/', {
				method: 'GET',
				credentials: 'include'
			})

			if (getPainpointsResponse.status !== 200) {
				throw Error('getPainpointsResponse is not working')
			}

			const painpointsResponse = await getPainpointsResponse.json()
			console.log(painpointsResponse, '<--- painpointsResponse');

			this.setState({
				painpoints: painpointsResponse.data
			})

		} catch (err) {
			console.log(err);
		}
	}

	addPainpoint = async (data) => {

		// try {
		// 	const createPainpointResponse = await fetch('http://localhost:8000/painpoints/', {
		// 		method: 'POST',
		// 		credentials: 'include',
		// 		body: JSON.stringify(data),
		// 		headers: {
		// 			'enctype': 'multipart/form-data'
		// 		}
		// 	})
		//
		// 	const parsedResponse = await createPainpointResponse.json();
		//
		// 	this.setState({
		// 		painpoints: [...this.state.painpoints, parsedResponse.data]
		// 	})
		//
		// 	this.getPainpoints()
		// } catch (err) {
		// 	console.log(err)
		// }

		try {

			console.log('THIS.STATE ARRAY IN THE MAIN INDEX: ', this.state);
			const createPainpointResponse = await fetch('http://localhost:8000/painpoints/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json'
				}
			})

			const createdPainpoint = await createPainpointResponse.json()
			console.log(createdPainpoint, '<--- createdPainpoint');

			const painpointFormattedForState = {
				'painpoint': createdPainpoint.data,
				'categories': []
			}
			this.setState({
				painpoints: [...this.state.painpoints, painpointFormattedForState]
			})

		} catch (err) {
			console.log(err);
		}

	}



	render() {
		return (
			<div>
				<CreatePainpoint addPainpoint={this.addPainpoint}/>
				<PainpointList painpoints={this.state.painpoints}/>
			</div>
		)
	}
}



export default PainpointContainer
