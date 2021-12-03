import { NavLink } from "react-router-dom";
import { useData } from "../Context/dataContext";

export function NavBar() {
    const {dispatch} = useData()
    return (
        <div >
            
                <NavLink to="/" style={{textDecoration: "none"}}>
                    <h1 className="title">
                        <div className="title__tech-title">
                                <span className="tech-t">T</span><span className="tech-left">ech</span>
                        </div>
                        <div>
                            <span >Q</span><span >uiz</span>
                        </div>
                    </h1>
                </NavLink>
           
            <NavLink to="/" >
                <button onClick={() => dispatch({type: "RESET_QUIZ"})}>Home</button>
            </NavLink>
        </div>
    )
}