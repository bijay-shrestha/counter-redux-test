import { createStore } from "redux";
import { rootReducer } from "../reducers";

const initialState = {
	count: 0,
};

export const store = createStore(rootReducer, initialState);
