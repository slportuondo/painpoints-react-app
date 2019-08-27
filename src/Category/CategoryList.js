import React from 'react'
import { Button, Divider } from 'semantic-ui-react'

const CategoryList = (props) => {

	const listOfCategories = props.categories.map((category, i) => {
		return (
			<div key={i} >
				<Button color='violet' size='small' fluid='true' onClick={props.selectCategory.bind(null, category)}>
					{category.category}
				</Button>
			</div>
		)
	})

	const filteredCategories = props.categoriesSelected.map((filteredCategory, i) => {
		return (
			<div key={i}>
				<Button disabled size='small' color='green'>
					{filteredCategory.category}
				</Button>
			</div>
		)
	})

	return(
		<div>
			<div>
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
