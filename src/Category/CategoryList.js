import React from 'react'
import { Button, Divider } from 'semantic-ui-react'

const CategoryList = (props) => {

	const listOfCategories = props.categories.map((category, i) => {
		return (
			<Button 
				key={i}
				color='violet' 
				size='small'  
				onClick={props.selectCategory.bind(null, category)}
			>
				{category.category}
			</Button>
		)
	})
	
	const filteredCategories = props.categoriesSelected.map((filteredCategory, i) => {
		return (
			<Button 
				key={i}
				disabled 
				size='small' 
				color='green'
			>
				{filteredCategory.category}
			</Button>
		)
	})

	return(
		<div>
			<div className='categoryList'>
				{listOfCategories}
			</div>
			<Divider />
			{
				props.selectingForPainpoint
					? <Button onClick={() => props.painpointCategoryJoin()}>Add Categories</Button>
					: <Button onClick={() => props.filterSearch()}>Search</Button>
			}
			<Button.Group>
				{filteredCategories}
			</Button.Group>


		</div>
	)
}

export default CategoryList
