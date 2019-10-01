import React from 'react'
import { Button } from 'semantic-ui-react'

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

	return(
		<div>
			<div className='category-list'>
				{listOfCategories}
			</div>
			<div className='category-list-search'>
				{
					props.selectingForPainpoint
						? <Button onClick={() => props.painpointCategoryJoin()}>Add Categories</Button> 
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
