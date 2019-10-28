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

			const filteredPainpoints = allPainpoints.data.filter((pp) => {
				for (let i = 0; i < this.state.filter.length; i++) {
					if (pp.category.id === this.state.filter[i].id) {
						return true
					}
				}
			}) 

			this.setState({
				painpoints: [...filteredPainpoints]
			})

		} catch (err) {
			console.log(err);
		}
	}


	render() {
		return(
			<div>
				<FilterPainpointList 
					painpoints={this.state.painpoints}
					filter={this.state.filter}
				/>
			</div>
		)
	}
}



export default FilterPainpoint