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

			this.setState({
				categories: allCategories.data
			})

		} catch (err) {
			console.log(err);
		}
	}

	selectCategory = async (category, e) => {
		e.preventDefault()

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
					let newCategories = selectedCats.filter(cats => cats.id !== category.id)

					this.setState({
						categoriesSelected: newCategories
					})

					return
				}
			}

			if (selectedCats.length < 3) {
				
				this.setState({
					categoriesSelected: [...selectedCats, category]
				})

				return
			}
		}
	}

	filterSearch = (e) => {
		this.props.getFilter(this.state.categoriesSelected)
		this.props.history.push('/painpoints/filter')
	}


	createCategory = async (data) => {
		try {
			if (this.state.categories.some(cat => cat.category === data.category)) {
				console.log('That category already exists');
			} else {
				const createCategoryResponse = await fetch('http://localhost:8000/category/', {
					method: 'POST',
					credentials: 'include',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				})

				const createdCategory = await createCategoryResponse.json()

				this.setState({
					categories: [...this.state.categories, createdCategory.data]
				})
			}
		} catch (err) {
			console.log(err);
		}
	}

	// painpointCategoryJoin = async () => {
	// 	if (this.state.categoriesSelected !== []){
	// 		this.state.categoriesSelected.forEach(async (cat, i) => {
	// 			let data = {
	// 				painpoint: this.props.painpointID,
	// 				category: cat.id
	// 			}
	// 			try {
	// 				const url = 'http://localhost:8000/pp_cat_join/'
	// 				const joinPPCResponse = await fetch(url, {
	// 					method: 'POST',
	// 					credentials: 'include',
	// 					body: JSON.stringify(data),
	// 					headers: {
	// 						'Content-Type': 'application/json'
	// 					}
	// 				})
	// 				const joinPPCResponseParsed = await joinPPCResponse.json()
	// 				this.props.stillEditing()
	// 			} catch (err) {
	// 				console.log(err);
	// 			}
	// 		})
	// 	} else {
	// 		let data = {
	// 			painpoint: this.props.painpointID,
	// 			category: 10
	// 		}
	// 		try {
	// 			const url = 'http://localhost:8000/pp_cat_join/'
	// 			const joinPPCResponse = await fetch(url, {
	// 				method: 'POST',
	// 				credentials: 'include',
	// 				body: JSON.stringify(data),
	// 				headers: {
	// 					'Content-Type': 'application/json'
	// 				}
	// 			})
	// 			const joinPPCResponseParsed = await joinPPCResponse.json()

	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	}
	// }

	render() {
		return (
			<div style={{backgroundColor: '#383838', height: '80vh'}}>
				{
					this.props.tagsForPainpoint
					? <div className='categoryListCreate'>
							<CategoryList
								categories={this.state.categories}
								selectCategory={this.selectCategory}
								categoriesSelected={this.state.categoriesSelected}
								selectingForPainpoint={true}
								chooseCategories={this.props.chooseCategories}
							/>
						</div>
					: <div className='categoryListMain'>
							<CategoryList
								categories={this.state.categories}
								selectCategory={this.selectCategory}
								filterSearch={this.filterSearch}
								categoriesSelected={this.state.categoriesSelected}
								painpointCategoryJoin={this.painpointCategoryJoin}
							/>
							<CreateCategory createCategory={this.createCategory}/>
						</div>
				}
			</div>
		)
	}
}




export default Category
