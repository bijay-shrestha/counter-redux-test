import React from "react";

const IncrementCount = (props) => (
	<input type="button" value="+1" onClick={props.handleIncrement} />
);

export default IncrementCount;