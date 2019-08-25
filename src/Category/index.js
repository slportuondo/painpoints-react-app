import React from 'react'
import CategoryList from '../Category/CategoryList'
import CreateCategory from '../Category/CreateCategory'

class Category extends React.Component {
	constructor() {
		super()

		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		this.getCategories()
	}

	getCategories = async () => {
		try {
			const categoriesResponse = await fetch('http://localhost:8000/category/', {
				method: 'GET',
				credentials: 'include'
			})

			if (categoriesResponse.status !== 200) {
				throw Error('categoriesResponse is not working')
			}

			const allCategories = await categoriesResponse.json()
			console.log(allCategories, '<--- allCategories');

			this.setState({
				categories: allCategories.data
			})

		} catch (err) {
			console.log(err);
		}
	}

	createCategory = async (data) => {
		try {

			const createCategoryResponse = await fetch('http://localhost:8000/category/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json'
				}
			})

			const createdCategory = await createCategoryResponse.json()
			console.log(createdCategory, '<--- createdCategory');

			this.setState({
				categories: [...this.state.categories, createdCategory.data]
			})

		} catch (err) {
			console.log(err);
		}
	}

	render() {
		console.log(this.state, '<--- this.state in Category');
		return (
			<div>
				<h1>Categories</h1>
				<CategoryList categories={this.state.categories}/>
				<CreateCategory createCategory={this.createCategory}/>
			</div>
		)
	}
}




export default Category