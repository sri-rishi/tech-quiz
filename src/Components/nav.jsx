import { NavLink } from "react-router-dom";
import { useData } from "../Context/dataContext";

export function NavBar() {
    const {dispatch} = useData()
    return (
        <div>
            <NavLink to="/" >
                <button onClick={() => dispatch({type: "RESET_QUIZ"})}>Home</button>
            </NavLink>
        </div>
    )
}