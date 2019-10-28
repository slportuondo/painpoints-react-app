import React from 'react'

const CategoryList = (props) => {
	
	const listOfCategories = props.categories.map((category, i) => {
		return (
			<button
				key={i}
				className='cat-button'
				onClick={props.selectCategory.bind(null, category)}
			>
				{category.category}
			</button>
		)
	})

	const filteredCategories = props.categoriesSelected.map((filteredCategory, i) => {
		return (
			<button
				key={i}
				className='cat-button'
				style={{backgroundColor: '#66cc72'}}
			>
				{filteredCategory.category}
			</button>
		)
	})

	return (
		<div>
			<div className='category-list'>
				{listOfCategories}
			</div>
			<div className='category-list-search'>
				{
					props.selectingForPainpoint
						? 
						<button 
							className='cat-button'
							style={{backgroundColor: '#c5c2c2'}}
							onClick={() => props.closeAddCatModal()}
						>Add Categories</button>
						:
						<button
							className='cat-button'
							style={{backgroundColor: '#c5c2c2'}}
							onClick={() => props.filterSearch()}
						>Search</button>
				}
			</div>
			<div className='category-list-search'>
				{filteredCategories}
			</div>

		</div>
	)
}

export default CategoryList
