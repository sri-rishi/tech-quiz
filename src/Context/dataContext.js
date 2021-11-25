import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext();

export function DataProvider({children}) {
    const [data, setData] = useState([]);
    const [{categoryParam}, dispatch] = useReducer(dataReducer, {categoryParam: ""}) 
    const url = "https://quizapi.io/api/v1/questions";
    const apikey = "6pNezKFK9uocK9GDcTB5WwIcFoewRF54OBOOOoZX";
    const category = categoryParam;

    useEffect(()=> {
        (async () => {
            const response = await axios.get(`${url}?apiKey=${apikey}&limit=5&category=${category}`);
            console.log(response.data)
            if(category !== "")  {
                setData(response.data);
            }
            
        })()
    }, [category])


    return (
        <DataContext.Provider value={{data, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}


function dataReducer(state, action) {
    switch(action.type) {
        case "DOCKER":
            return {
                ...state,
                categoryParam: "Docker"
            }

        case "DEVOPS":
            return {
                ...state,
                categoryParam: "DevOps"
            }

        case "LINUX":
            return {
                ...state, 
                categoryParam: "Linux"
            }

            default:
                return state;
    }
}

export function useData() {
    return useContext(DataContext);
}