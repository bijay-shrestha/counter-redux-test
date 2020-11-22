import React from "react";

const DecrementCount = (props) => (
	<input type="button" value="-1" onClick={props.handleDecrement} />
);
export default DecrementCount;
