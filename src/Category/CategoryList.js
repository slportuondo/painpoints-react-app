import React from 'react'


const CategoryList = (props) => {

	const listOfCategories = props.categories.map((category, i) => {
		return (
			<div
				style={{marginBottom: '20px', padding: '10px', borderRadius: '25px', width: 150, height: 50, backgroundColor: 'lavender', textAlign: 'center', border: '1px solid black'}}
				onClick={props.selectCategory.bind(null, category)}
				key={i} >
				{category.category}
			</div>
		)
	})

	const filteredCategories = props.categoriesSelected.map((filteredCategory, i) => {
		return (
			<div key={i}>{filteredCategory.category}</div>
		)
	})

	return(
		<div>
			{listOfCategories}
			{
				props.selectingForPainpoint
					? <div>
							<h3>Add categories to painpoint</h3>
							{filteredCategories}
							<button onClick={() => props.painpointCategoryJoin}>Add Categories</button>
						</div>
					: <div>
							<h3>Filter by:</h3>
							{filteredCategories}
							<button onClick={props.filterSearch}>Search</button>
						</div>
			}

		</div>
	)
}

export default CategoryList
