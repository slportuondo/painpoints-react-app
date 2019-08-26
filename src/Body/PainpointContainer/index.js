import React from 'react'
import PainpointList from './PainpointList'
import CreatePainpoint from './CreatePainpoint'
import EditPainpoint from './EditPainpoint'

class PainpointContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			painpoints: [],
			painpointToEdit: -1
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

		try {

			const createPainpointResponse = await fetch('http://localhost:8000/painpoints/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json'
				}
			})

			const createdPainpoint = await createPainpointResponse.json()

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


	updatePainpoint = async (data, idOfPainpointToUpdate) => {
		console.log(data, 'DATA');
		try {
			const url = 'http://localhost:8000/painpoints/' + idOfPainpointToUpdate
			const editedPainpoint = await fetch(url, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const parsedResponse = await editedPainpoint.json()
			console.log(parsedResponse);
			this.getPainpoints()

		} catch (err) {
			console.log(err);
		}
	}

	setPainpointToEdit = (indexOfPainpointToEdit) => {
		console.log(indexOfPainpointToEdit)
		this.setState({
			painpointToEdit: indexOfPainpointToEdit
		})
		// return(
		// 	<EditPainpoint painpoint={painpoint} editPainpoint={this.editPainpoint}/>
		// )
	}

	render() {
		console.log("this.state.painpointToEdit in render() in PainpointContainer:")
		console.log(this.state.painpointToEdit);
		return (
			<div>
				<CreatePainpoint addPainpoint={this.addPainpoint}/>
				{
					this.state.painpointToEdit === -1
					?
					null
					:
					<EditPainpoint
						painpointToEdit={this.state.painpoints[this.state.painpointToEdit]}  updatePainpoint={this.updatePainpoint}
					/>
				}
				<PainpointList painpoints={this.state.painpoints} setPainpointToEdit={this.setPainpointToEdit}/>
			</div>
		)
	}
}



export default PainpointContainer
