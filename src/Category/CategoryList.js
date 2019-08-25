import React from 'react'


const CategoryList = (props) => {

	console.log(props.categories, '<--- props categories');

	const listOfCategories = props.categories.map((category, i) => {
		return (
			<li key={i}>{category.category}</li>
		)
	})

	return(
		<ul>
			{listOfCategories}
		</ul>
	)
}

export default CategoryList