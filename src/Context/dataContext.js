import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext();

export function DataProvider({children}) {
    const [data, setData] = useState([]);
    const [{categoryParam, selectedValues}, dispatch] = useReducer(dataReducer, {categoryParam: "", selectedValues: []}) 
    const url = "https://quizapi.io/api/v1/questions";
    const apikey = "6pNezKFK9uocK9GDcTB5WwIcFoewRF54OBOOOoZX";
    

    useEffect(()=> {
        (async () => {
            const response = await axios.get(`${url}?apiKey=${apikey}&limit=5&category=${categoryParam}`);
            console.log(response.data)
            if(categoryParam !== "")  {
                setData(response.data);
            }
        })()
    }, [categoryParam]);


    // useEffect(() => {
    //     return () => dataReducer() 
    // }, [categoryParam]);

    console.log(selectedValues);

    return (
        <DataContext.Provider value={{data, dispatch, selectedValues, categoryParam}}>
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
        
        case "SELECTED":
            return {
                ...state, 
                selectedValues: state.selectedValues.concat(action.payload)
            }

        case "RESET_QUIZ":
            return {
                ...state,
                selectedValues: [],
            }
        
        case "EXIT_PAGE":
            return{
                ...state,
                categoryParam: state.categoryParam
            }

        default:
            return state;
    }
}

export function useData() {
    return useContext(DataContext);
}