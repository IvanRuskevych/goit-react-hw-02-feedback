import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics/Statistics';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    // console.log(e.currentTarget.name);
    this.setState({
      [e.currentTarget.name]: Number(e.currentTarget.value) + 1,
    });
  };

  countTotalFeedback = () => {
    const { bad, neutral, good } = this.state;
    return bad + neutral + good;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { bad, neutral, good } = this.state;
    const total = this.countTotalFeedback();

    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <p>Please leave feedback</p>
        {/* <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleClick}
        /> */}

        <button
          type="button"
          name="good"
          onClick={this.handleClick}
          value={good}
        >
          Good
        </button>

        <button
          type="button"
          name="neutral"
          value={neutral}
          onClick={this.handleClick}
        >
          Neutral
        </button>

        <button type="button" name="bad" value={bad} onClick={this.handleClick}>
          Bad
        </button>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
