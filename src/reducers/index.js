import {
	DECREMENT_COUNTER,
	INCREMENT_COUNTER,
	RESET_COUNTER,
} from "../actions/constants";

export const rootReducer = (state, action) => {
	const originalState = state;
	switch (action.type) {
		case INCREMENT_COUNTER:
			return {
				...state,
				count: Number(originalState.count) + Number(action.payload.number),
			};
		case DECREMENT_COUNTER:
			return {
				...state,
				count: Number(originalState.count) - Number(action.payload.number),
			};
		case RESET_COUNTER:
			return {
				...state,
				count: Number(action.payload.number),
			};
		default:
			return state;
	}
};
