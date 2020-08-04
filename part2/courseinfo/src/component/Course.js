import React from "react";

const Course = ({ course }) => {
    return (
        <>
            {course.map((course) => (
                <div key={course.id}>
                    <Header course={course} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            ))}
        </>
    );
};
const Header = ({ course }) => {
    return <h1>{course.name}</h1>;
};

const Total = ({ parts }) => {
    const total = parts.reduce((acc, part) => acc + part.exercises, 0);

    return <p>Total of {total} exercises</p>;
};

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    );
};

export default Course;
