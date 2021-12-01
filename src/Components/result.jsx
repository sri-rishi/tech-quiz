import { useEffect, useState } from "react";
import {useData} from "../Context/dataContext";

export function Result() {
    const {selectedValues, correctValues} = useData();
    const [count, setCount] = useState(0);

    function correctAnsCount(arr1, arr2) {
        return arr1.forEach(el => el === arr2[arr1.indexOf(el)] ? setCount(count => count + 1) : "")
    }

    // function backColor(arr1, arr2, arr3) {
    //    return arr1.forEach( el => arr3.includes(el) ? "red" : "")
    //     // console.log(arr3)
    // }
    // console.log(correctValues[index])

   useEffect(() => {
        correctAnsCount(selectedValues, correctValues)
   }, [])
    
    return (
        <div>
            <div>
                <h2>Your Result</h2>
                <div>
                    <div><span>Total Questions</span> <span>5</span></div>
                    <div><span>correct Answers</span> <span>{count}</span></div>
                    <div><span>Success Percentage</span> <span>{(count * 100) / 5}</span></div>
                </div>
                {/* <div style={{margin: "1rem"}}>
                    <div>
                        {
                            data.map((item, index) => {
                                return (
                                    <div>
                                        <h3>{item.question}</h3>
                                        { Object.values(item.answers).map((subItem, index) => 
                                        <p style={{backgroundColor: `${backColor(correctValues, selectedValues, Object.values(item.answers))}`}}>
                                            {subItem}
                                        </p>
                                        )}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
            </div>
        </div>
    )
}