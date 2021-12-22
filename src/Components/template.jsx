import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/dataContext";
import { Timer } from "./Timer";
import { BouncingBalls } from "react-cssfx-loading/lib";


export function Template() {
    const {data, dispatch, index, setIndex, selectedValues} = useData();
    const [isClickable, setIsClickable] = useState(true);
    const [color, setColor] = useState("#480cec");
    const navigate = useNavigate();
    let correct_Answers;

    function handleSubmit() {
        setIsClickable(true);
        if(index >= data.length - 1) {
            navigate("/result");
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
            setColor("#06FF00");
        }else {
            setColor("#F90716");
        }

        console.log(color);
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
                <div className="main">
                    <div className="content-div">
                        <div className="timer-div">
                            <Timer />
                        </div>
                        <div className="question-div">
                            <h2 className="question">{data[index].question}</h2>
                            <div className="answers-div">
                                {
                                Object.values(data[index].answers).map((item) => (
                                    item === null ? "" : 
                                    <button
                                    className="answer"
                                    key={item}
                                        onClick={() => handleAnswerCilck(item)}
                                        style={{
                                            backgroundColor : item === selectedValues[index] ? color : "#480cec",
                                            boxShadow: `0 0 10px 4px ${item === selectedValues[index] ? color : ""}`
                                        }}
                                    disabled={!isClickable}
                                    >
                                        {item}
                                    </button>
                                )
                                )
                            }
                            </div>
                        </div>                    
                        <div className="action-btn-div">

                            <button className="btn-reset" onClick={() => {
                                setIndex(0);
                                dispatch({type: "RESET_QUIZ"})
                            }}>
                                Reset 
                            </button>
                            <button className="btn-submit" onClick={() => handleSubmit()}>Submit</button>
                        </div>
                    </div>
                </div>
                : 
                <div className="loader-div">
                    <h1 className="loading-text">Loading</h1>
                    <div className="loader">
                        <BouncingBalls  color="#FFC947" width="15px" height="15px"/>
                    </div>
                </div>
            } 
        </div>
    )
}