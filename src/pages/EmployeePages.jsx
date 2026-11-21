import { useEffect, useState } from 'react';
import { getEmployees, createEmployee } from '../api/employeeApi';

function EmployeePage() {
    const [employees, setEmployees] = useState([]);

    const [nip, setNip] = useState("");

    const [fullName, setFullName] =  useState("");

    const [email, setEmail] =  useState("");

    const [department, setDepartment] =  useState("");

    const [position, setPosition] =  useState("");
    
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

        await createEmployee({ nip, fullName, email, department, position });
        await loadData();
        alert("Employee created");
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
                <button type="submit">Create Employee</button>
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
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        
    );
}

export default EmployeePage;