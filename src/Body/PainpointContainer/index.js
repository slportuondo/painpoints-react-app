import React from 'react'
import PainpointList from './PainpointList'
import CreatePainpoint from './CreatePainpoint'
import EditPainpoint from './EditPainpoint'
import Category from '../../Category'
class PainpointContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			painpoints: [],
			painpointToEdit: -1,
			addingCategories: false
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
				painpoints: [painpointFormattedForState, ...this.state.painpoints],
				addingCategories: true
			})

		} catch (err) {
			console.log(err);
		}
	}

	updatePainpoint = async (data, idOfPainpointToUpdate) => {
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

			const painpointFormattedForState = {
				'painpoint': {
					...parsedResponse.data
				},
				'categories': []
			}

			const newArray = this.state.painpoints
			newArray[this.state.painpointToEdit] = painpointFormattedForState

			this.setState({
				painpoints: newArray,
				painpointToEdit: -1
			})

		} catch (err) {
			console.log(err);
		}
	}

	setPainpointToEdit = (indexOfPainpointToEdit) => {
		this.setState({
			painpointToEdit: indexOfPainpointToEdit
		})
	}

	destroyPainpoint = async (index, idOfPainpointToDestroy) => {

		try {
			const url = 'http://localhost:8000/painpoints/' + idOfPainpointToDestroy
			const deletePainpointResponse = await fetch(url, {
				method: 'DELETE',
				credentials: 'include'
			})

			const parsedResponse = await deletePainpointResponse.json()

			this.setState({
				painpoints: this.state.painpoints.filter((painpoint, i) => i != index)
			})

		} catch (err) {
			console.log(err);
		}
	}

	render() {

		return (
			<div>
				<CreatePainpoint addPainpoint={this.addPainpoint}/>
				<PainpointList painpoints={this.state.painpoints} setPainpointToEdit={this.setPainpointToEdit} destroyPainpoint={this.destroyPainpoint}/>
				{
					this.state.addingCategories
					? <Category painpointID={this.state.painpoints[0].painpoint.id} addingCategories={this.state.addingCategories} />
					:	(this.state.painpointToEdit === -1)
						? null
						: <EditPainpoint painpointToEdit={this.state.painpoints[this.state.painpointToEdit]}  updatePainpoint={this.updatePainpoint} />
				}
			</div>
		)
	}
}



export default PainpointContainer
