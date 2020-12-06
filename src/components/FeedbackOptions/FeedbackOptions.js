// import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(feedback => (
        <button
          type="button"
          key={feedback}
          name={feedback}
          onClick={() => onLeaveFeedback(feedback)}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
