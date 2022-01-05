import { useEffect, useState } from "react";
import {useData} from "../Context/dataContext";
import { NavBar } from "./nav";

export function Result() {
    const {selectedValues, correctValues} = useData();
    const [count, setCount] = useState(0);

    function correctAnsCount(arr1, arr2) {
        return arr1.forEach(el => el === arr2[arr1.indexOf(el)] ? setCount(count => count + 1) : "")
    }

    let success_percentage = Math.floor((count * 100) / 5);

   useEffect(() => {
        correctAnsCount(selectedValues, correctValues)
   }, [])
    
    return (
        <div>
            <NavBar />
            <div>
                {
                    success_percentage === 100 ?
                    <div>
                        <img src="../../images\winner-trophy.gif" alt="winner-gif" />
                    </div>
                    :
                    <div>
                        <img src="../../images\star.gif" alt="star-gif" />
                    </div>
                }
                

                <h2>Your Result</h2>
                <div>
                    <div><span>Total Questions</span> <span>5</span></div>
                    <div><span>correct Answers</span> <span>{count}</span></div>
                    <div><span>Success Percentage</span> <span>{success_percentage}</span></div>
                </div>

                
            </div>
        </div>
    )
}