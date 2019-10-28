import React from 'react'
import PainpointList from './PainpointList'
import CreatePainpoint from './CreatePainpoint'
import EditPainpoint from './EditPainpoint'
import { Modal } from 'semantic-ui-react'

class PainpointContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			painpoints: [],
			painpointToEdit: {},
			openEditModal: false,
			addingCategories: false
		}

	}

	componentDidMount() {
		this.getPainpoints()
	}

	getPainpoints = async () => {

		try {
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

	addPainpoint = async (data, categories) => {

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

			categories.forEach(async (cat, i) => {

				let data = {
					painpoint: createdPainpoint.data.id,
					category: cat.id
				}

				try {
					const url = 'http://localhost:8000/pp_cat_join/'

					const joinPPCResponse = await fetch(url, {
						method: 'POST',
						credentials: 'include',
						body: JSON.stringify(data),
						headers: {
							'Content-type': 'application/json'
						}
					})

				} catch (err) {
					console.log(err);
				}
			})

			const painpointFormattedForState = {
				'painpoint': createdPainpoint.data,
				'categories': categories
			}

			this.setState({
				painpoints: [painpointFormattedForState, ...this.state.painpoints]
			})

			this.getPainpoints()

		} catch (err) {
			console.log(err);
		}
	}

	updatePainpoint = async (data, categories, idOfPainpointToUpdate) => {
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
				'categories': categories,
				'painpoint': parsedResponse.data
			}

			const newArray = this.state.painpoints.map((pp) => {
				if (pp.painpoint.id === parsedResponse.data.id) {
					pp = painpointFormattedForState
				}

				return pp
			})

			this.setState({
				painpoints: newArray,
				openEditModal: false
			})

		} catch (err) {
			console.log(err);
		}
	}

	editingPainpoint = (ppc) => {
		this.setState({
			openEditModal: true,
			painpointToEdit: ppc
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

			const updatedPainpointsList = this.state.painpoints.filter(painpoint => painpoint._id !== parsedResponse._id)

			this.setState({
				painpoints: updatedPainpointsList
			})

		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div className='ppHomePage'>
				<CreatePainpoint addPainpoint={this.addPainpoint}/>
				<PainpointList 
					painpoints={this.state.painpoints} 
					editingPainpoint={this.editingPainpoint} 
					destroyPainpoint={this.destroyPainpoint}
					userId={this.props.userId}
				/>
				<Modal
					open={this.state.openEditModal}
					onClose={this.updatePainpoint}
					basic
				>
					<EditPainpoint 
						painpointToEdit={this.state.painpointToEdit}  
						updatePainpoint={this.updatePainpoint} 
					/>
				</Modal>
			</div>
		)
	}
}



export default PainpointContainer
