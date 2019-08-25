import React from 'react'


const CategoryList = (props) => {

	console.log(props.categories, '<--- props categories');

	const listOfCategories = props.categories.map((category, i) => {
		return (
			<button key={i}>{category.category}</button>
		)
	})

	return(
		<ul>
			{listOfCategories}
		</ul>
	)
}

export default CategoryList