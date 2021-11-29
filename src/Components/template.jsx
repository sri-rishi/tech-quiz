import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/dataContext";


export function Template() {
    const {data, dispatch, index, setIndex} = useData();
    const [isClickable, setIsClickable] = useState(true);
    const navigate = useNavigate();
    let correct_Answers;

    function handleSubmit() {
        setIsClickable(true);
        if(index >= data.length - 1) {
            navigate("/result")
        }else {
            setIndex(val => val + 1);
        }
        dispatch({type: "CORRECT_ANSWERS", payload: correct_Answers});
    }
    
    function correctAnswers(arr1, arr2) {
        let idx = arr1.findIndex(el => el === "true");
        return arr2[idx];
    }
    
    if(data.length) {
       correct_Answers =  correctAnswers(Object.values(data[index].correct_answers), Object.values(data[index].answers));;
    }

    return (
        <div>
            {
                data.length ?
                <div>
                    <div>
                        <h1>{data[index].question}</h1>
                        <div>
                            {
                            Object.values(data[index].answers).map((item) => (
                                item === null ? "" : 
                                <button
                                    onClick={() =>  {
                                    setIsClickable(false)
                                    dispatch({type: "SELECTED", payload: item}) 
                                }}
                                disabled={!isClickable}>{item}</button>
                            )
                            )
                        }
                        </div>
                    </div>

                    <button onClick={() => {
                        handleSubmit()
                        
                    }
                    }>Submit</button>
                    <button onClick={() => {
                        setIndex(0);
                        dispatch({type: "RESET_QUIZ"})
                        }}>
                            Reset Quiz
                    </button>
                </div>
                : "Data is still loading"
            }
        </div>
    )
}