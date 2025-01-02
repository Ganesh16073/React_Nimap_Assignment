import  { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: Date.now() };
    setEmployees([...employees, newEmployee]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setEmployeeToEdit(null);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const editEmployee = (employee) => {
    setEmployeeToEdit(employee);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm
        addEmployee={addEmployee}
        updateEmployee={updateEmployee}
        employeeToEdit={employeeToEdit}
      />
      <h2 style={{marginTop:40}}>Search By Name (Atleast 2 Character )</h2>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <EmployeeList
        employees={filteredEmployees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
      />
    </div>
  );
};

export default EmployeeManagement;
