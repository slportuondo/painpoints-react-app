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

	selectCategory = async (category, e) => {
		e.preventDefault()
		console.log(this.state, '<---- this.state in select category');

		console.log(category, '<--- category selected');

		const categoriesResponse = await fetch('http://localhost:8000/category/', {
			method: 'GET',
			credentials: 'include'
		})

		if (categoriesResponse.status !== 200) {
			throw Error('categoriesResponse is not working')
		}

		const allCategories = await categoriesResponse.json()
		// console.log(allCategories, '<--- allCategories');

		let selectedCats = this.state.categoriesSelected

		if (selectedCats.length === 0) {
			this.setState({
				categoriesSelected: [category]
			})

			return
		}

		if (selectedCats.length > 0) {
			console.log(selectedCats, '<--- if there is at least one category in selected');

			for (let i = 0; i < selectedCats.length; i++) {

				if (category.id === selectedCats[i].id) {
					let newCategories = selectedCats.splice(i, 1)
					console.log(newCategories, '<--- categories after splice');

					this.setState({
						categoriesSelected: [...selectedCats]
					})

					return
				}
			}
			if (selectedCats.length < 3) {
				for (let i = 0; i < allCategories.data.length; i++) {
					// check if the category selected matches any of the categories in the list
					if (allCategories.data[i].id === category.id) {

						// check all categories that were already selected and see if they already match the chosen category. if it does, then remove it

						this.setState({
							categoriesSelected: [...this.state.categoriesSelected, allCategories.data[i]]
						})

						return
					}
				}
			}
		}
	}

	filterSearch = (e) => {
		this.props.getFilter(this.state.categoriesSelected)
		this.props.history.push('/painpoints/filter')
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
		console.log(this.state, '<--- this.state in Category in render');
		return (
			<div>
				<h1>Categories</h1>
				<CategoryList
					categories={this.state.categories}
					selectCategory={this.selectCategory}
					filterSearch={this.filterSearch}
					categoriesSelected={this.state.categoriesSelected}
				/><br />
				<CreateCategory createCategory={this.createCategory}/>
			</div>
		)
	}
}




export default Category
