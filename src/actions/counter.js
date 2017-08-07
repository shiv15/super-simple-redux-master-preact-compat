export const incrementCount = () => {
	return {
		type: 'INCREMENT',
		payload: 2,
	}
}

export const decrementCount = () => {
	return {
		type: 'DECREMENT',
		payload: 2,
	}
}
