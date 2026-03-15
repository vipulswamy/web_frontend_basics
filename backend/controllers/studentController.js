import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent
} from "../models/studentModel.js";

export const fetchStudents = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

export const createStudent = async (req, res) => {
  const { name, roll, course } = req.body;

  if (!name || !roll || !course) {
    return res.status(400).json({ error: "Name, roll, and course required" });
  }

  try {
    const student = await addStudent(name, roll, course);
    res.status(201).json(student);
    //console.log("incoming student", req.body);
  } catch (error) {
    res.status(500).json({ error: "Failed to add student" });
  }
};

export const editStudent = async (req, res) => {
  const { id } = req.params;
  const { name, roll, course } = req.body;

  try {
    const student = await updateStudent(id, name, roll, course);
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Failed to update student" });
  }
};

export const removeStudent = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteStudent(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete student" });
  }
};