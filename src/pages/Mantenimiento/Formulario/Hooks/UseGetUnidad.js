import { useContext, useEffect, useState } from "react";
import { getUnidad } from "../Services/ApiFormulario";
import { AuthContext } from "../../../../context/AuthContext";
// En tu archivo App.jsx o index.js
import 'primereact/resources/themes/viva-light/theme.css'; // Tema de PrimeReact (puedes elegir otro tema si lo deseas)
import 'primereact/resources/primereact.min.css'; // Estilos generales de PrimeReact
import 'primeicons/primeicons.css'; 
const UseGetUnidad = () => {
    const [unidad, setUnidad] = useState([]);
    useEffect(() => {
        const FetchData = async () => {
            const response = await getUnidad();
            setUnidad(response);
        }
        FetchData();
    }, [])
    return { unidad, setUnidad };
}
export default UseGetUnidad;