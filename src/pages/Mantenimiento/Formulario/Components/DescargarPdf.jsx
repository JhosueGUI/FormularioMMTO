import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { MdOutlineFileDownload } from "react-icons/md";
import axios from "axios";

export const DescargarPdf = ({ formulario }) => {
    const descargar = async () => {
        try {
            const respuestaGet = await axios.get(`https://jwmalmcenb-production.up.railway.app/api/orden_compra/descargar/pdf/${formulario}`, {
                responseType: 'blob' // Indica que esperas un blob (archivo) como respuesta
            });
             // Creas una URL de objeto blob para el archivo PDF
             const url = window.URL.createObjectURL(new Blob([respuestaGet.data]));
                
             // Creas un enlace temporal para descargar el archivo PDF
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', `${formulario}-orden_compra.pdf`);
             document.body.appendChild(link);
             link.click();
             link.parentNode.removeChild(link);

             // Liberar recursos del objeto blob
             window.URL.revokeObjectURL(url);
        } catch (error) {

        }
    }
    return (
        <Button outlined onClick={descargar} ><MdOutlineFileDownload /></Button>
    );
};
