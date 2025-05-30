import React, { createContext, useEffect, useState } from 'react'
import { myAxios } from '../axios/axios';

  export const AdatokContext = createContext();

  export const AdatokProvider = ({children}) => {

    const [szavakLista, setSzavakLista] = useState([]);
    const [temaLista, setTemaLista] = useState([]);

    const getAdat = async (vegpont, callback) => {
        try {
            const response = await myAxios.get(vegpont);
            console.log(response);
            callback(response.data);
        } catch (err) {
            console.log("Hiba történt az adatok lekérdezésekor!")
        }
    }
    
    return (
        <AdatokContext.Provider
        value={{
            szavakLista,
            setSzavakLista,
            temaLista,
            setTemaLista,
            getAdat
        }}>
            {children}
        </AdatokContext.Provider>
    )
  };

export default AdatokContext;