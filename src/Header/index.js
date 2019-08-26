import React from 'react'


const Header = (props) => {
	return (
		<div>
			<div style={{
					backgroundColor: 'lightblue',
					width: 100,
					height: 100
				}}></div>
			<div>Home</div>
			<div>Industries</div>
			<button>Logout</button>
		</div>
	)
}


export default Header