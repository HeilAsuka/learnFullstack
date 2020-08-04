import React, { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" },
    ]);
    const [newName, setNewName] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [filteredPerson, setFilterPerson] = useState([]);
    const [filteredString, setFilterString] = useState("");
    const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName.trim(),
            number: newPhoneNumber.trim(),
        };
        const findSame = (person) => {
            return person.name === personObject.name;
        };
        if (persons.some((person) => findSame(person))) {
            window.alert(`${personObject.name} is already added to phonebook`);
        } else {
            setPersons(persons.concat(personObject));
        }
        setNewName("");
        setNewPhoneNumber("");
    };
    const filterPerson = (event) => {
        setFilterString(event.target.value);
        const result = persons.filter((person) =>
            person.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilterPerson(result);
    };
    const handlePersonChange = (event) => {
        setNewName(event.target.value);
    };
    const handlePhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value);
    };

    const number = filteredString.length === 0 ? persons : filteredPerson;
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                filteredString={filteredString}
                filterPerson={filterPerson}
            />
            <div>Add new</div>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handlePersonChange={handlePersonChange}
                newPhoneNumber={newPhoneNumber}
                handlePhoneNumberChange={handlePhoneNumberChange}
            />
            <h2>Numbers</h2>
            <Persons number={number} />
        </div>
    );
};
const Persons = ({ number }) => {
    return number.map((person) => (
        <div key={person.name}>
            {person.name} {person.number}
        </div>
    ));
};
const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <div>
                name:{" "}
                <input
                    value={props.newName}
                    onChange={props.handlePersonChange}
                />
            </div>
            <div>
                number:{" "}
                <input
                    value={props.newPhoneNumber}
                    onChange={props.handlePhoneNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};
const Filter = (props) => {
    return (
        <div>
            Filter show with{" "}
            <input
                value={props.filteredString}
                onChange={props.filterPerson}></input>
        </div>
    );
};
export default App;
