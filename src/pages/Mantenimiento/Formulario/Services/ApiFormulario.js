import axios from "axios";
const PROGRAMACION_API = import.meta.env.VITE_PROGRAMACION_API;

export const getUnidad = async () => {
    try {
        const apiClient = axios.create({
            baseURL: PROGRAMACION_API,
        });
        const response = await apiClient.get('/formulario/get/unidad');
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener unidad:', error);
        throw error;
    }
}

export const createFormularioSinLogin = async (data) => {
    try {
        const apiClient = axios.create({
            baseURL: PROGRAMACION_API,
        });
        const response = await apiClient.post('/formulario/create', data);
        return response.data.resp;
    } catch (error) {
        console.error('Error al crear formulario:', error);
        throw error;
    }
}
export const getPersonal = async () => {
    try{
        const apiClient = axios.create({
            baseURL: PROGRAMACION_API,
        });
        const response = await apiClient.get('/formulario/get/personal');
        return response.data.data;
    }catch(error){
        console.error('Error al obtener personal:',error);
        throw error;
    }
}