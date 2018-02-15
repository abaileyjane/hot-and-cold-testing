import * as actions from '../actions';

const initialState = {
	guesss:"",
	count: 0,
	temp: "Make your Guess!",
	prevGuesses:"",
	number: Math.floor(Math.random() * 100)

}

export const gameReducer = (state=initialState, action) =>{
	if (action.type === actions.SET_GUESS){
		return Object.assign({}, state, {
			guess: action.guess
		})
	}

	else if (action.type === actions.SET_PREVGUESSES){
		return Object.assign({}, state, {
			prevGuesses: state.prevGuesses + action.guess + "\n"
		})
	}

	else if (action.type === actions.SET_TEMP){
		return Object.assign({}, state, {
			temp: action.temp
		})
	}

	else if (action.type === actions.SET_COUNT){
		return Object.assign({}, state, {
			count: state.count + action.count
		})
	}

	return state;

}