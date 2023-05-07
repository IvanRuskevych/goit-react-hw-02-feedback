export default function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log(Object.entries(options));
  return (
    <>
      <button
        type="button"
        name="good"
        value={options.good}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        value={options.neutral}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>

      <button
        type="button"
        name="bad"
        value={options.bad}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </>
  );
}
