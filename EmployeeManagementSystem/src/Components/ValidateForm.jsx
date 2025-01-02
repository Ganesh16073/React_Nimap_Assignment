const validateForm = (employee) => {
    let errors = {};
    if (!employee.name || employee.name.length < 3 || employee.name.length > 50 || !/^[a-zA-Z\s]+$/.test(employee.name)) {
      errors.name = "Name must be between 3-50 characters and contain only letters and spaces.";
    }
  
    const dob = new Date(employee.dob);
    if (!employee.dob || dob >= new Date()) {
      errors.dob = "DOB must be a past date.";
    }
  
    if (!/^\d{10}$/.test(employee.contact)) {
      errors.contact = "Contact must be exactly 10 digits.";
    }

    if (!/\S+@\S+\.\S+/.test(employee.email)) {
      errors.email = "Email is invalid.";
    }

    if (!employee.address) {
      errors.address = "Address is required.";
    }

    if (isNaN(employee.salary) || employee.salary <= 0) {
      errors.salary = "Salary must be a positive number.";
    }
  
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const errors = validateForm(employee);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
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
  