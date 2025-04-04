import React from 'react';

// Import fontawsome to react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export const Icon = () => {
	return(
		// React example
		<div className="card bgDigits justify-content-center m-2 p-3">
			<FontAwesomeIcon icon={faClock} flip="horizontal" />
		</div>
		
	);
};

