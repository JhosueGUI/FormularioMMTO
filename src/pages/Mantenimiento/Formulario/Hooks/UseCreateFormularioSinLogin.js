import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { createFormularioSinLogin } from "../Services/ApiFormulario";

const UseCreateFormularioSinLogin = () => {
    const Create = async (data) => {
        try {
            const response = await createFormularioSinLogin( data);
            return response;
        } catch (error) {
            console.error('Error al crear formulario:', error);
        }
    }
    return { Create };
}
export default UseCreateFormularioSinLogin;