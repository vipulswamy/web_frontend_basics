function StudentTable({ students, onDelete }) {
  if (students.length === 0) {
    return <p>No students added yet 👆</p>;
  }

  return (
    <div className="table-container">
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.roll}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.course}</td>
              <td>
                <button className="btn-delete" onClick={() => onDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;