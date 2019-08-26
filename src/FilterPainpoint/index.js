import React from 'react'
import FilterPainpointList from '../FilterPainpoint/FilterPainpointList'

class FilterPainpoint extends React.Component {
	constructor() {
		super()

		this.state = {
			painpoints: [],
			filter: []
		}
	}

	componentDidMount() {
		this.getFilter()
		this.getPainpoints()
	}

	getFilter = () => {
		this.setState({
			filter: [...this.props.filter]
		})
	}

	getPainpoints = async () => {
		try {
			const getPainpointsResponse = await fetch('http://localhost:8000/painpoints/all', {
				method: 'GET',
				credentials: 'include'
			})

			if (getPainpointsResponse.status !== 200) {
				throw Error('getPainpointsResponse is not running')
			}


			const allPainpoints = await getPainpointsResponse.json()
			console.log(allPainpoints.data, '<--- allPainpoints');

			// let occ = {};
			const filteredPainpoints = allPainpoints.data.filter((pp) => {
				for (let i = 0; i < this.state.filter.length; i++) {
					if (pp.category.id === this.state.filter[i].id) {
						return true
					}
				}
			}) 
			// .forEach(pp => {
			//     occ[pp.painpoint.id] = (occ[pp.painpoint.id] || 0) + 1;
			// })

			// console.log(occ, '<--- occ');


			this.setState({
				painpoints: [...filteredPainpoints]
			})

		} catch (err) {
			console.log(err);
		}
	}


	render() {
		console.log(this.props, '<--- this.props in FilterPainpoint');
		console.log(this.state, '<---- this.state in FilterPainpoint');

		return(
			<div>
				<h1>Painpoints</h1>
				<FilterPainpointList painpoints={this.state.painpoints} />
			</div>
		)
	}
}



export default FilterPainpoint