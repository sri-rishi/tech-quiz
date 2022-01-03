import { useEffect, useState } from "react"
import { useData } from "../Context/dataContext";

export function Timer({setTimer, timer}) {
    // const [width, setWidth] = useState(100);
    // const [timer, setTimer] = useState(60);
    const {index, setIndex, data , dispatch, correct_Answers} = useData();
    useEffect(()=> {
        const time = setInterval(() => {
                setTimer(time => time < 1 ? 60 : time - 1); 
        }, 1000) ;
        return () => clearInterval(time)
    }, [index]);

    // useEffect(()=> {
    //     const time = setInterval(() => {
    //             setWidth(width => width < 0 ?  100 : width - 1 );
    //     }, 100) ;
    //     return () => clearInterval(time);
    // }, [index]);

    // useEffect(() => {
    //         if(width === 0 && data.length) {
    //             setIndex(val => val + 1);
    //         }
    // }, [width]);


    return (
        <div
        style={{
            backgroundColor: timer <= 10 ? "#F90716" : "#121013", 
            boxShadow: timer <= 10 ? "0 0 10px 4px #F90716" : ""
            // backgroundColor: "red",
            // width: `${width}%`,
            // height: "1rem"
        }} 
        className="timer-div">
            {timer === 60 ? <span>01 : 00</span> : <span>00 :  {timer < 10 ? "0" + timer: timer}</span>}
        </div>
    )
}