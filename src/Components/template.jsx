import { useState } from "react";
import { useData } from "../Context/dataContext";

export function Template() {
    const [index , setIndex] = useState(0);
    const {data} = useData();

    function handleSubmit() {
        if(index >= data.length - 1) {
            alert("You have reached to end of quiz");
        }else {
            setIndex(val => val + 1)
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
                                console.log(Object.values(data[index].answers)),
                            Object.values(data[index].answers).map(item => (
                                item === null ? "" : <button key={item.id}>{item}</button>
                            )
                            )
                        }
                        </div>
                    </div>

                    <button onClick={() => handleSubmit()}>Submit</button>
                </div>
                : "Data is still loading"

            }
        </div>
    )
}