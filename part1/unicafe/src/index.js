import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <p>Give feedback,please!</p>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button
        text="Neutral"
        handleClick={() => setNeutral(neutral + 1)}
      />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      <p>Statistics</p>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};
const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};
const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <>
        <p>No feedback given.</p>
      </>
    );
  } else {
    return (
      <>
        <Statistic
          text="Good"
          good={props.good}
          neutral={props.neutral}
          bad={props.bad}
        />
        <Statistic
          text="Neutral"
          good={props.good}
          neutral={props.neutral}
          bad={props.bad}
        />
        <Statistic
          text="Bad"
          good={props.good}
          neutral={props.neutral}
          bad={props.bad}
        />
        <Statistic
          text="All"
          good={props.good}
          neutral={props.neutral}
          bad={props.bad}
        />
        <Statistic
          text="Average"
          good={props.good}
          neutral={props.neutral}
          bad={props.bad}
        />
        <Statistic
          text="Positive"
          good={props.good}
          neutral={props.neutral}
          bad={props.bad}
        />
      </>
    );
  }
};
const Statistic = (props) => {
  switch (props.text) {
    case "Good":
      return (
        <>
          <p>Good: {props.good}</p>
        </>
      );
    case "Neutral":
      return (
        <>
          <p>Neutral: {props.neutral}</p>
        </>
      );
    case "Bad":
      return (
        <>
          <p>Bad: {props.bad}</p>
        </>
      );
    case "All":
      return (
        <>
          <p>All: {props.good + props.neutral + props.bad}</p>
        </>
      );
    case "Average":
      return (
        <>
          <p>
            Average:{" "}
            {(props.good + props.neutral * 0.5 - props.bad) /
              (props.good + props.neutral + props.bad)}
          </p>
        </>
      );
    case "Positive":
      return (
        <>
          <p>
            Positive:{" "}
            {((props.good + props.neutral) /
              (props.good + props.neutral + props.bad)) *
              100}
            {" "}%
                    </p>
        </>
      );
    default:
      break;
  }
};
ReactDOM.render(<App />, document.getElementById("root"));
