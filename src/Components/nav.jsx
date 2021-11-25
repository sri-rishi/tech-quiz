import { NavLink } from "react-router-dom";
import { useData } from "../Context/dataContext";

export function NavBar() {
    const {dispatch} = useData();
    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/linux">
                <button onClick={() => dispatch({type: "LINUX"})}>Linux</button>
            </NavLink>
            <NavLink to="/devops">
                <button onClick={() => dispatch({type: "DEVOPS"})}>DevOps</button>
            </NavLink>
            <NavLink to="/docker">
                <button onClick={()=> dispatch({type: "DOCKER"})}>Docker</button>
            </NavLink>
        </nav>
    )
}