import React from "react";
const Persons = ({ persons, handleRemovePerson }) => {
    return persons.map((person) => (
        <div key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={() => handleRemovePerson(person)}>Remove</button>
        </div>
    ));
};
export default Persons;
