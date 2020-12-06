import { Component } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = nameBtn => {
    this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const result = Math.round((this.state.good / total) * 100);
    return total ? result : 0;
  }

  render() {
    const options = Object.keys(this.state).map(key => key);
    const { good, neutral, bad } = this.state;
    const totalFeedBack = this.countTotalFeedback();
    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {totalFeedBack > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
