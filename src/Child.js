import React from 'react'
import { getRandomColor } from './randomColorGenerator.js'

function Child({ onChangeColor, childColor }) {
	function handleChangeColor() {
		onChangeColor(getRandomColor())
	}
	return (
		<div
			className='child'
			onClick={handleChangeColor}
			style={{ backgroundColor: childColor }}
		/>
	)
}

export default Child