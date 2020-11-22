import {
	DECREMENT_COUNTER,
	INCREMENT_COUNTER,
	RESET_COUNTER,
} from "./constants";

export const increment = (number) => ({
	type: INCREMENT_COUNTER,
	payload: {
		number,
	},
});

export const decrement = (number) => ({
	type: DECREMENT_COUNTER,
	payload: {
		number,
	},
});

export const reset = (number) => ({
	type: RESET_COUNTER,
	payload: {
		number,
	},
});
