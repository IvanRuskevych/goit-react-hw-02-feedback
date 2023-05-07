import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const stateKeys = Object.keys(options);
  return (
    <ul>
      {stateKeys.map(state => {
        return (
          <li key={nanoid(5)}>
            <button
              type="button"
              name={state}
              onClick={() => onLeaveFeedback(state)}
            >
              {state}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
