import { useState, useEffect } from "react"
import { useData } from "../Context/dataContext";

export function Timer() {
    const [timer, setTimer] = useState(60);
    const {index} = useData();

    // useEffect(()=> {
    //     const time = setInterval(() => {
    //             setTimer(time => time < 1 ? 60 : time - 1);
    //     }, 1000) 
    //     return () => clearInterval(time)
    // }, [index]);

    return (
        <div
        style={{
            backgroundColor: timer <= 10 ? "#F90716" : "#121013", 
            boxShadow: timer <= 10 ? "0 0 10px 4px #F90716" : ""
        }} 
        className="timer-div">
            {timer === 60 ? <span>01 : 00</span> : <span>00 :  {timer < 10 ? "0" + timer: timer}</span>}
        </div>
    )
}