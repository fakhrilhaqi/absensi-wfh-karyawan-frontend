import api from "./axios";

export const createAttendance = async (formData) => {
    const response = await api.post('/attendance', formData, );
    return response.data;
};

export const getAttendances = async () => {
    const response = await api.get('/attendance');
    return response.data;
}