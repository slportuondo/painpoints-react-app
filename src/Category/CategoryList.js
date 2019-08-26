import React from 'react'


const CategoryList = (props) => {

	// console.log(props.categories, '<--- props categories');

	const listOfCategories = props.categories.map((category, i) => {
		return (
			<div 
				style={{width: 150, height: 50, backgroundColor: 'lavender', textAlign: 'center', border: '2px solid black'}} 
				onClick={props.selectCategory.bind(null, category)} 
				key={i} >
				{category.category}
			</div>
		)
	})

	return(
		<div>
			{listOfCategories}
			<button>Search</button>
		</div>
	)
}

export default CategoryList