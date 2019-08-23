import React from 'react'
import SolutionsList from '../SolutionsList'


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

	render() {
		return (
			<main>
				<SolutionsList solutions={this.state.solutions}/>
			</main>
		)
	}
}


export default SolutionContainer