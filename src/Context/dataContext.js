import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
export const DataContext = createContext();

export function DataProvider({children}) {
    const [data, setData] = useState([]);
    const [index , setIndex] = useState(0);
    const [{categoryParam, selectedValues, correctValues}, dispatch] = useReducer(dataReducer, {categoryParam: "", selectedValues: [], correctValues: []}) 
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

    console.log("this is selected values", selectedValues);
    console.log("this is correct values", correctValues);
    

    return (
        <DataContext.Provider value={{data, dispatch, correctValues, selectedValues, categoryParam, index, setIndex}}>
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
                correctValues: [],
            }
        
        case "CORRECT_ANSWERS":
            return {
                ...state,
                correctValues: state.correctValues.concat(action.payload)
            }

        
        default:
            return state;
    }
}

export function useData() {
    return useContext(DataContext);
}