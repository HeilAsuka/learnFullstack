import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import personSevice from "./services/Person";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [filteredString, setFilterString] = useState("");
    const [notificationContent, setNotificationContent] = useState("");
    const [notificationType, setNotificationType] = useState("");
    const filteredPerson = filteredString
        ? persons.filter((person) =>
              person.name.toLowerCase().includes(filteredString.toLowerCase())
          )
        : persons;
    useEffect(() => {
        personSevice.getAllPersons().then((persons) => setPersons(persons));
    }, []);
    const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName.trim(),
            number: newPhoneNumber.trim(),
        };
        const hasSamePerson = persons.filter(
            (person) => person.name === personObject.name
        );
        if (hasSamePerson.length) {
            if (
                window.confirm(
                    `${personObject.name} is already added to phonebook, replace it with new one ?`
                )
            ) {
                personSevice
                    .updatePerson(hasSamePerson[0].id, personObject)
                    .then(() => {
                        personSevice
                            .getAllPersons()
                            .then((persons) => setPersons(persons));
                    })
                    .catch((error) => {
                        setNotificationType("error");
                        setNotificationContent(
                            `Information of ${personObject.name} is already removed`
                        );
                        setTimeout(() => {
                            setNotificationType(null);
                            setNotificationContent(null);
                        }, 5000);
                    });
            }
        } else {
            setPersons(persons.concat(personObject));
            personSevice.addPerson(personObject).then((res_person) => {
                setPersons(persons.concat(res_person));
                setNotificationType("success");
                setNotificationContent(`${res_person.name} added to phonebook`);
                setTimeout(() => {
                    setNotificationType(null);
                    setNotificationContent(null);
                }, 5000);
            });
        }
        setNewName("");
        setNewPhoneNumber("");
    };
    const handleRemovePerson = (personNeedRemove) => {
        if (
            window.confirm(
                `Are you sure you want to remove ${personNeedRemove.name} ?`
            )
        ) {
            personSevice
                .removePerson(personNeedRemove)
                .then(() => {
                    setPersons(
                        persons.filter(
                            (person) => person.id !== personNeedRemove.id
                        )
                    );
                    setNotificationType("success");
                    setNotificationContent(`${personNeedRemove.name} removed`);
                    setTimeout(() => {
                        setNotificationType(null);
                        setNotificationContent(null);
                    }, 5000);
                })
                .catch((error) => {
                    setNotificationType("error");
                    setNotificationContent(
                        `Information of ${personNeedRemove.name} is already removed`
                    );
                    setTimeout(() => {
                        setNotificationType(null);
                        setNotificationContent(null);
                    }, 5000);
                });
        }
    };

    const filterPerson = (event) => {
        setFilterString(event.target.value);
    };
    const handlePersonChange = (event) => {
        setNewName(event.target.value);
    };
    const handlePhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value);
    };
    return (
        <div>
            <h2>Phonebook</h2>
            <Notification
                notificationType={notificationType}
                notificationContent={notificationContent}
            />
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
            <Persons
                persons={filteredPerson}
                handleRemovePerson={handleRemovePerson}
            />
        </div>
    );
};
export default App;
