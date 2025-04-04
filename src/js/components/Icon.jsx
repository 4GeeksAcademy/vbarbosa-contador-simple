import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Icon () {

	const element = <FontAwesomeIcon icon={faEnvelope} />

	  return (
	<div className="d-flex justify-content-center">
	  {element}
	</div>
  );
};
