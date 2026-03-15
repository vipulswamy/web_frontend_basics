//let students = [];
import axios from 'axios';


const BASE_URL = process.env.MOCKAPI_URL; 

//GET
export const getAllStudents = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

//POST
export const addStudent = async (name, roll, course) => {
  const response = await axios.post(BASE_URL, {
    name,
    roll,
    course
  });

  return response.data;
};

//PUT
// UPDATE student
export const updateStudent = async (id, name, age) => {
  const response = await axios.put(`${BASE_URL}/${id}`, {
    name,
    age
  });

  return response.data;
};
// Delete
export const deleteStudent = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return true;
};

