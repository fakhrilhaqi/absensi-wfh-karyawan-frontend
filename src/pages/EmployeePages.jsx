import { useEffect, useState } from 'react';
import { getEmployees, createEmployee , editEmployee } from '../api/employeeApi';

function EmployeePage() {
    const [employees, setEmployees] = useState([]);

    const [nip, setNip] = useState("");

    const [fullName, setFullName] =  useState("");

    const [email, setEmail] =  useState("");

    const [department, setDepartment] =  useState("");

    const [position, setPosition] =  useState("");

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const data = await getEmployees();
        console.log('Employee data:', data);
        setEmployees(data);
    };

    const submitEmployee = async (e) => {
        e.preventDefault(); 

        const employeeData = {
            nip,
            fullName,
            email,
            department,
            position
        };
        
        if (selectedEmployee) {
            // Edit existing employee
            await editEmployee(selectedEmployee.id, employeeData);
            alert("Employee updated");
        } else {
            // Create new employee
            await createEmployee(employeeData);
            alert("Employee created");
        }

        await loadData();
        
        setSelectedEmployee(null); // Clear selected employee after editing
        setNip("");
        setFullName("");
        setEmail("");
        setDepartment("");
        setPosition("");

    };

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setNip(employee.nip);   
        setFullName(employee.fullName);
        setEmail(employee.email);
        setDepartment(employee.department);
        setPosition(employee.position);
    };
    
    
    return (
        <div>
            <h1>Employee Page</h1>

            <form onSubmit={submitEmployee}>
                <input
                    type="text"
                    placeholder="NIP"
                    value={nip}
                    onChange={(e) => setNip(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                <button type="submit">{selectedEmployee ? "Update Employee" : "Create Employee"}</button>
            </form>

            <table>
            <thead>
                <tr>
                    <th>NIP</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Department</th>  
                    <th>Position</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.nip}>
                        <td>{employee.nip}</td>
                        <td>{employee.fullName}</td>
                        <td>{employee.email}</td>
                        <td>{employee.department}</td>
                        <td>{employee.position}</td>
                        <td><button onClick={() => handleEdit(employee)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        
    );
}

export default EmployeePage;