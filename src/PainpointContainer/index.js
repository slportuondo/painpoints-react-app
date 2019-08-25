import React from 'react'
import PainpointList from '../PainpointList'
import CreatePainpoint from '../Body/CreatePainpoint'

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

	render() {
		console.log(this.state, '<--- this.state in PainpointList');
		return (
			<div>
				<CreatePainpoint />
				<PainpointList painpoints={this.state.painpoints}/>
			</div>
		)
	}
}



export default PainpointContainer
