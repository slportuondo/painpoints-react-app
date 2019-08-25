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
		this.getPainpoint()
	}

	getPainpoint = async () => {

		try {
			console.log("getPainpoint is working");
			const getPainpointResponse = await fetch('http://localhost:8000/painpoints/', {
				method: 'GET',
				credentials: 'include'
			})

			if (getPainpointResponse.status !== 200) {
				throw Error('getPainpointResponse is not working')
			}

			const painpointsResponse = await getPainpointResponse.json()
			console.log(painpointsResponse, '<--- painpointsResponse');

			this.setState({
				painpoints: painpointsResponse.data
			})

		} catch (err) {
			console.log(err);
		}
	}

	addPainpoint = async (data) => {
		try {
			console.log('RIGHT BEFORE REQUEST');
			console.log(data);
			const createPainpointResponse = await fetch('http://localhost:8000/painpoints/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(data),
				headers: {
					'enctype': 'multipart/form-data'
				}
			})

			const parsedResponse = await createPainpointResponse.json();


		} catch (err) {
			console.log(err)
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
