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
		console.log(data, '<--- data in addPainpoint');
		try {
			const createPainpointResponse = await fetch('http://localhost:8000/painpoints/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(data),
				headers: {
					'enctype': 'multipart/form-data'
				}
			})

			const parsedResponse = await createPainpointResponse.json();
			console.log(parsedResponse, '<---- parsedResponse in addPainpoint');

			this.setState({
				painpoints: [...this.state.painpoints, parsedResponse.data]
			})

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
