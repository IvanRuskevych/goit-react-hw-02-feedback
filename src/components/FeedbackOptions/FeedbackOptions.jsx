import React from 'react';

export default function FeedbackOptions({
  good,
  bad,
  neutral,
  onLeaveFeedback,
}) {
  return (
    <>
      <button type="button" name="good" onClick={onLeaveFeedback} value={good}>
        Good
      </button>
      <button
        type="button"
        name="neutral"
        value={neutral}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button type="button" name="bad" value={bad} onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
}
