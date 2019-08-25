import React from 'react'
import CategoryList from '../Category/CategoryList'
import CreateCategory from '../Category/CreateCategory'

class Category extends React.Component {
	constructor() {
		super()

		this.state = {
			categories: [],
			categoriesSelected: []
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

	selectCategory = async (categoryId, e) => {
		console.log(categoryId, '<--- category selected');

		const categoriesResponse = await fetch('http://localhost:8000/category/', {
			method: 'GET',
			credentials: 'include'
		})

		if (categoriesResponse.status !== 200) {
			throw Error('categoriesResponse is not working')
		}

		const allCategories = await categoriesResponse.json()
		console.log(allCategories, '<--- allCategories');

		for (let i = 0; i < allCategories.data.length; i++) {
			// check if the category selected matches any of the categories in the list
			if (allCategories.data[i].id === categoryId) {

				this.setState({
					categoriesSelected: [...this.state.categoriesSelected, allCategories.data[i]]
				})
			}
		}

		this.setState({
			categories: allCategories.data
		})
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
				<CategoryList categories={this.state.categories} selectCategory={this.selectCategory}/>
				<CreateCategory createCategory={this.createCategory}/>
			</div>
		)
	}
}




export default Category