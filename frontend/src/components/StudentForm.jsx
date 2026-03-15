import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !roll || !course) {
      alert("Please fill all fields");
      return;
    }

    onAddStudent({ name, roll, course });

    setName("");
    setRoll("");
    setCourse("");
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Add Student</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        <option>MERN Stack</option>
        <option>Frontend</option>
        <option>Python</option>
      </select>

      <button type="submit" className="btn-add">Add Student</button>
    </form>
  );
}

export default StudentForm;