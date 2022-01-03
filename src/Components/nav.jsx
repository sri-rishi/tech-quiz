import { NavLink } from "react-router-dom";
import { useData } from "../Context/dataContext";

export function NavBar() {
    const {dispatch, setIndex} = useData()
    return (
        <div className="navbar">
            <div className="link-div">
                <NavLink to="/" style={{textDecoration: "none"}}>
                    <div className="logo-div">
                        <img className="logo-image" src="../../images\logo.png" alt="logo"/>
                    </div>
                </NavLink>
            
                <NavLink to="/" style={{textDecoration: "none"}}>
                    <div className="home-div">
                        <button className="btn-home" onClick={() => {
                            setIndex(0)
                            // setTimer(60)
                            dispatch({type: "RESET_QUIZ"})
                            }}>Home</button>
                    </div>
                </NavLink>
                </div>
        </div>
    )
}