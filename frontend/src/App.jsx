import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  async function addStudent(student) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      const newStudent = await response.json();

      setStudents((prev) => [...prev, newStudent]);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  }

  async function deleteStudent(id) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">🎓 Student Registration</h1>

        <StudentForm onAddStudent={addStudent} />
        <StudentTable students={students} onDelete={deleteStudent} />
      </div>
    </div>
  );
}

export default App;