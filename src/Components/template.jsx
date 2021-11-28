import { useState } from "react";
import { useData } from "../Context/dataContext";




export function Template() {
    const [index , setIndex] = useState(0);
    const {data, dispatch} = useData();
    const [isClickable, setIsClickable] = useState(true);
    
   

    function handleSubmit() {
        setIsClickable(true);
        if(index >= data.length - 1) {
            alert("You have reached to end of quiz");
        }else {
            setIndex(val => val + 1);
        }
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

                    <button onClick={() => handleSubmit()}>Submit</button>
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