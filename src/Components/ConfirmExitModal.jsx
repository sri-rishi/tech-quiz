import { useData } from "../Context/dataContext"

export function ConfirmExitModal() {
    const {dispatch} = useData();
    
    return (
        <div>
            <h3>Are You Sure </h3>
            <p>Your records will removed</p>
            <button onClick={() => dispatch({type: "EXIT_PAGE"})}>OK</button>
        </div>
    )
}