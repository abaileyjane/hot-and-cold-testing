export const SET_GUESS = 'SET_GUESS';
export const setGuess = guess =>({
	type:SET_GUESS,
	guess
})

export const SET_PREVGUESSES = 'SET_PREVGUESSES';
export const setPrevGuesses = guess =>({
	type:SET_PREVGUESSES,
	guess
})

export const SET_TEMP = 'SET_TEMP';
export const setTemp = temp=>({
	type: SET_TEMP,
	temp
})

export const SET_COUNT = 'SET_COUNT';
export const setCount = count => ({
	type: SET_COUNT,
	count
})