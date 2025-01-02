const EmployeeList = ({ employees, deleteEmployee, editEmployee }) => {
  return (
    <div>
      <h2>Employee List :</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <h3>{employee.name} - {employee.department}</h3>
            <button style={{width:100, paddingRight:10, marginRight:10}} onClick={() => editEmployee(employee)}>Edit</button>
            <button style={{width:100, paddingRight:10, marginRight:10}} onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
