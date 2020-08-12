import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllPersons = async () => {
    const request = axios.get(baseUrl);
    const res = await request;
    return res.data;
};
const addPerson = async (personObject) => {
    const request = axios.post(baseUrl, personObject);
    const res = await request;
    return res.data;
};
const removePerson = async (personObject) => {
    const request = axios.delete(`${baseUrl}/${personObject.id}`);
    const res = await request;
    return res.data;
};
const updatePerson = async (id, personObject) => {
    const request = axios.put(`${baseUrl}/${id}`, personObject);
    const res = await request;
    return res.data;
};

export default {
    getAllPersons,
    addPerson,
    removePerson,
    updatePerson,
};
