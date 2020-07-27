import React, { useState } from "react";
import ReactDOM from "react-dom";

const randomNumber = (n) => Math.floor(Math.random() * n);

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
    const [maxVotes, setMaxVotes] = useState(0);
    const findMaxVotes = () => {
        setMaxVotes(votes.indexOf(Math.max(...votes)));
    };
    const changeVote = (selected) => {
        const copy = [...votes];
        copy[selected] += 1;
        if (copy !== votes) {
            findMaxVotes();
            setVotes(copy);
        }
    };
    const changeSelected = () => {
        setSelected(randomNumber(6));
    };

    return (
        <>
            <div>{props.anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
            <button onClick={() => changeVote(selected)}>Vote</button>
            <button onClick={changeSelected}>Next Anecdote</button>
            <div>Anecdote with max votes</div>
            <div>{props.anecdotes[maxVotes]}</div>
        </>
    );
};

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
