import React from 'react'
import CategoryList from '../Category/CategoryList'
import CreateCategory from '../Category/CreateCategory'

class Category extends React.Component {
	constructor(props) {
		super(props)

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

		const categoriesResponse = await fetch('http://localhost:8000/category/', {
			method: 'GET',
			credentials: 'include'
		})

		if (categoriesResponse.status !== 200) {
			throw Error('categoriesResponse is not working')
		}

		const allCategories = await categoriesResponse.json()

		let selectedCats = this.state.categoriesSelected

		if (selectedCats.length === 0) {
			this.setState({
				categoriesSelected: [category]
			})

			return
		}

		if (selectedCats.length > 0) {

			for (let i = 0; i < selectedCats.length; i++) {

				if (category.id === selectedCats[i].id) {
					let newCategories = selectedCats.splice(i, 1)

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
		console.log("filter called");
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
			console.log(createdCategory, '<--- AGHHHHHHHHHHHHHHHHHHHHHHHHHHHH');

			this.setState({
				categories: [...this.state.categories, createdCategory.data]
			})

		} catch (err) {
			console.log(err);
		}
	}

	painpointCategoryJoin = async() => {
		if (this.state.categoriesSelected != []){
			this.state.categoriesSelected.forEach(async (cat, i) => {
				let data = {
					painpoint: this.props.painpointID,
					category: cat.id
				}
				try {
					const url = 'http://localhost:8000/pp_cat_join/'
					const joinPPCResponse = await fetch(url, {
						method: 'POST',
						credentials: 'include',
						body: JSON.stringify(data),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const joinPPCResponseParsed = await joinPPCResponse.json()

				} catch (err) {
					console.log(err);
				}
			})
		} else {
				let data = {
					painpoint: this.props.painpointID,
					category: 10
				}
				try {
					const url = 'http://localhost:8000/pp_cat_join/'
					const joinPPCResponse = await fetch(url, {
						method: 'POST',
						credentials: 'include',
						body: JSON.stringify(data),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const joinPPCResponseParsed = await joinPPCResponse.json()

				} catch (err) {
					console.log(err);
				}
		}

	}

	render() {
		return (
			<div>
				{
					this.props.painpointID
					? <div>
							<CategoryList
								categories={this.state.categories}
								selectCategory={this.selectCategory}
								categoriesSelected={this.state.categoriesSelected}
								filterSearch={this.filterSearch}
								painpointCategoryJoin={this.painpointCategoryJoin}
								selectingForPainpoint={true}
								/>
						</div>
					: <div>
							<button>Profile Page</button>
							<h1>Categories</h1>
							<CategoryList
								categories={this.state.categories}
								selectCategory={this.selectCategory}
								filterSearch={this.filterSearch}
								categoriesSelected={this.state.categoriesSelected}
								/><br />
							<CreateCategory createCategory={this.createCategory}/>
						</div>
				}
			</div>
		)
	}
}




export default Category
