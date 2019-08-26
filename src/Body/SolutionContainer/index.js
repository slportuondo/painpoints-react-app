import React from 'react'
import SolutionsList from './SolutionsList/'
import CreateSolution from './CreateSolution'


class SolutionContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			solutions: []
		}
	}

	componentDidMount() {
		this.getSolutions()
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
			console.log(solutionsResponse, '<--- solutionsResponse');

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


		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<main>
				<CreateSolution addSolution={this.addSolution}/>
				<SolutionsList solutions={this.state.solutions}/>
			</main>
		)
	}
}


export default SolutionContainer
