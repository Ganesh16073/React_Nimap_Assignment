import { useState, useEffect } from "react";
import '../assets/EmployeeFormCSS.css';

const EmployeeForm = ({ addEmployee, updateEmployee, employeeToEdit }) => {
  const [employee, setEmployee] = useState({
    name: "",
    dob: "",
    contact: "",
    email: "",
    address: "",
    department: "",
    designation: "",
    salary: "",
  });

  useEffect(() => {
    if (employeeToEdit) {
      setEmployee(employeeToEdit);
    }
  }, [employeeToEdit]);

  const handelFormChang = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeToEdit) {
      updateEmployee(employee);
    } else {
      addEmployee(employee);
    }
    setEmployee({
      name: "",
      dob: "",
      contact: "",
      email: "",
      address: "",
      department: "",
      designation: "",
      salary: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handelFormChang}
        placeholder="Employee Name"
        required
      />
      <input
        type="date"
        name="dob"
        value={employee.dob}
        onChange={handelFormChang}
        placeholder="Date of Birth"
        required
      />
      <input
        type="text"
        name="contact"
        value={employee.contact}
        onChange={handelFormChang}
        placeholder="Contact Number"
        required
      />
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handelFormChang}
        placeholder="Email Address"
        required
      />
      <textarea
        name="address"
        value={employee.address}
        onChange={handelFormChang}
        placeholder="Address"
        required
      />
      <input
        type="text"
        name="department"
        value={employee.department}
        onChange={handelFormChang}
        placeholder="Department"
        required
      />
      <input
        type="text"
        name="designation"
        value={employee.designation}
        onChange={handelFormChang}
        placeholder="Designation"
        required
      />
      <input
        type="number"
        name="salary"
        value={employee.salary}
        onChange={handelFormChang}
        placeholder="Salary"
        required
      />
      <button type="submit">{employeeToEdit ? "Update" : "Add"} Employee</button>
    </form>
  );
};

export default EmployeeForm;
