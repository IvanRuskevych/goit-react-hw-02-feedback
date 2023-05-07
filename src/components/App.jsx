import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = () => {
    console.log(Object.keys(this.state));
  };

  handleClick = e => {
    // console.log(e.currentTarget.name);
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: Number(value) + 1,
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
    // const options = Object.keys(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage();
    // console.log(Object.keys(this.state));
    return (
      <>
        <p>Please leave feedback</p>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleClick}
        />

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
