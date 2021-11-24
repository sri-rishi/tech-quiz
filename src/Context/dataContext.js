import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function DataProvider({children}) {
    const [data, setData] = useState([]);
    const url = "https://quizapi.io/api/v1/questions";
    const apikey = "6pNezKFK9uocK9GDcTB5WwIcFoewRF54OBOOOoZX";
    const category = "Linux";

    useEffect(()=> {
        (async () => {
            const response = await axios.get(`${url}?apiKey=${apikey}&limit=5&category=${category}`);
            console.log(response.data)
            setData(response.data);
        })()
    }, [])


    return (
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
    return useContext(DataContext);
}