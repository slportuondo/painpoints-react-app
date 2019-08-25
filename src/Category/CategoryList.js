import React from 'react'


const CategoryList = (props) => {

	console.log(props.categories, '<--- props categories');

	const listOfCategories = props.categories.map((category, i) => {
		return (
			<button onClick={props.selectCategory.bind(null, category.id)} key={i}>{category.category}</button>
		)
	})

	return(
		<div>
			{listOfCategories}
		</div>
	)
}

export default CategoryList