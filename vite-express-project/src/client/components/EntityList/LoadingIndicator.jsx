import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const loadingWheelStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const LoadingIndicator = ({ style }) => {
  return (
    <div
      style={{ ...style, ...loadingWheelStyle }}
      className="loading-indicator"
    >
      <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-primary" />
    </div>
  )
};
