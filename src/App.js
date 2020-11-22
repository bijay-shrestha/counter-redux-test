import React from "react";
import IncrementCount from "./components/IncrementCount";
import DecrementCount from "./components/DecrementCount";
import { ResetCount } from "./components/ResetCount";
import { store } from "./store/index";
import { decrement, increment, reset } from "./actions";

export default class App extends React.PureComponent {
	handleIncrement = (number) => {
		return store.dispatch(increment(number));
	};

	handleDecrement = (currentCount, number) => {
		console.log("decrementing .. ", currentCount);
		return Number(currentCount) > 0
			? store.dispatch(decrement(number))
			: alert("Cannot be decreased!");
	};

	handleReset = (number) => store.dispatch(reset(number));

	render() {
    const { count } = store.getState();
    
		return (
			<>
				<h1>{count}</h1>
				<IncrementCount handleIncrement={() => this.handleIncrement(1)} />
				<DecrementCount
					handleDecrement={() => this.handleDecrement(count, 1)}
				/>
				<ResetCount handleReset={() => this.handleReset(0)} />
			</>
		);
	}
}
