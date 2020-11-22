import React from 'react';

export const ResetCount = (props) => {
	return (
		<>
			<button onClick={props.handleReset}> Reset</button>
		</>
	);
};
