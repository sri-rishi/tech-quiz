import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/dataContext";
import { Timer } from "./Timer";
import { Hypnosis} from "react-cssfx-loading/lib";


export function Template() {
    const {data, dispatch, index, setIndex, selectedValues} = useData();
    const [isClickable, setIsClickable] = useState(true);
    const [bgColor, setBgColor] = useState("gray");
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

    // useEffect(() => {
    //     const timeOut = setInterval(() => handleSubmit(), 60000);
    //     return () => clearInterval(timeOut);
    // })

    
    function handleAnswerCilck(val) {
        setIsClickable(false)
        dispatch({type: "SELECTED", payload: val}) 
        if(val === correct_Answers) {
            setBgColor("green");
        }else {
            setBgColor("red");
        }

        console.log(bgColor);
    }
    
    function correctAnswers(arr1, arr2) {
        let idx = arr1.findIndex(el => el === "true");
        return arr2[idx];
    }
        
    if(data.length) {
       correct_Answers =  correctAnswers(Object.values(data[index].correct_answers), Object.values(data[index].answers));
    //    console.log("this is correctanswer",  correct_Answers)
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
                                key={item}
                                    onClick={() => handleAnswerCilck(item)}
                                    style={{backgroundColor : item === selectedValues[index] ? bgColor : "gray"}}
                                disabled={!isClickable}
                                >
                                    {item}
                                </button>
                            )
                            )
                        }
                        </div>
                    </div>
                    {/* <Timer /> */}
                    <button onClick={() => handleSubmit()}>Submit</button>
                    <button onClick={() => {
                        setIndex(0);
                        dispatch({type: "RESET_QUIZ"})
                        }}>
                            Reset Quiz
                    </button>
                </div>
                : 
                <div className="loader-div">
                    <h1>Loading</h1> 
                    <Hypnosis color="#FFC947"/>
                </div>
            }
        </div>
    )
}