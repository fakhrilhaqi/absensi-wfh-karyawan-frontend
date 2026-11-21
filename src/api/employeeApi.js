
import api from './axios';

export const getEmployees = async () => {
    const response = await api.get('/employees');
    return response.data;
};

export const createEmployee = async (employeeData) => {
    const response = await api.post('/employees', employeeData);
    return response.data;
};

export const editEmployee = async (id, payload) => {   
    const response = await api.patch(`/employees/${id}`, payload);
    return response.data;
};