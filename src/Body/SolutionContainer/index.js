import React from 'react'
import SolutionsList from './SolutionsList/'
import CreateSolution from './CreateSolution'


class SolutionContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			solutions: [],
			painpoint: {},
			filters: []
		}
	}

	componentDidMount() {
		this.getSolutions()
		this.getPainpoint()
	}

	getPainpoint = async () => {
		try {
			const getPainpointResponse = await fetch('http://localhost:8000/painpoints/' + this.props.match.params.id, {
					method: 'GET',
					credentials: 'include'
				}
			)

			const painpointResponse = await getPainpointResponse.json()

			if (painpointResponse.status.code !== 200) {
				throw Error('painpointResponse is not working')
			}

			this.setState({
				painpoint: painpointResponse.data.painpoint,
				filters: painpointResponse.data.categories
			})
		} catch (err) {
			console.log(err);
		}
	}

	getSolutions = async () => {
		try {
			const getSolutionsResponse = await fetch('http://localhost:8000/solution/', {
				method: 'GET',
				credentials: 'include'
			})

			if (getSolutionsResponse.status !== 200) {
				throw Error('getSolutionsResponse is not working')
			}

			const solutionsResponse = await getSolutionsResponse.json()

			this.setState({
				solutions: solutionsResponse.data
			})

		} catch (err) {
			console.log(err);
		}
	}

	addSolution = async (data) => {
		try {
			const createdSolution = await fetch('http://localhost:8000/solution/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json'
				}
			})

			const createdSolutionResponse = await createdSolution.json()

			this.setState({
				solutions: [...this.state.solutions, createdSolutionResponse.data]
			})

			this.getSolutions()

		} catch (err) {
			console.log(err);
		}
	}

	render() {
		const filterButtons = this.state.filters.map((cat, i) => {
			return (
				<div key={i} id='filterButton' className='cat-button'>
					{cat.category}
				</div>
			)
		})

		return (
			<div className='filterPainpointHome'>
				<div className='filterPainpointList'>
					<div className='ppContainer'>
						<h2 className='ppTitle'>{this.state.painpoint.head}</h2>
						<div className='ppInfo' style={{paddingBottom: '25px'}}>
							<p className='ppInfoBody'>{this.state.painpoint.body}</p>
							<p className= 'ppInfoFile'>{this.state.painpoint.attachment}</p>
						</div>
					</div>
					<CreateSolution addSolution={this.addSolution} painpointId={this.props.match.params.id}/>
					<SolutionsList solutions={this.state.solutions} painpointId={this.props.match.params.id}/>
				</div>
				<div className='filterList'>
					{filterButtons}
				</div>
			</div>
		)
	}
}


export default SolutionContainer
