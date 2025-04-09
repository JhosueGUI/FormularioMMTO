import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { getPersonal } from "../Services/ApiFormulario";

const UseGetPersonal = () => {
    const [personal, setPersonal] = useState([]);
    useEffect(() => {
        const FetchData = async () => {
            const response = await getPersonal()
            setPersonal(response)
        }
        FetchData()
    }, [])
    return { personal, setPersonal }
}
export default UseGetPersonal