import { NavLink } from "react-router-dom";
import { useData } from "../Context/dataContext";

export function NavBar() {
    const {dispatch} = useData()
    return (
        <div >
            
                <NavLink to="/">
                <div className="title">
                    <div className="tech-title">
                        <span className="tech-t">T</span><span className="tech-left">ech</span>
                    </div>
                    <div>
                        <span >Q</span><span >uiz</span>
                    </div>
                </div>
                </NavLink>
           
            <NavLink to="/" >
                <button onClick={() => dispatch({type: "RESET_QUIZ"})}>Home</button>
            </NavLink>
        </div>
    )
}