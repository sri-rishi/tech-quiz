import { Link } from "react-router-dom";
import { useData } from "../Context/dataContext";
import { NavBar } from "./nav";


export function Home() {
    const {dispatch} = useData()
    return (
        <div>
            <NavBar />
            <div>
                <Link to="/linux">
                    <button onClick={() => dispatch({type: "LINUX"}) }>Linux</button>
                </Link>
                <Link to="/devops" >
                    <button onClick={() => dispatch({type: "DEVOPS"})}>DevOps</button>
                </Link>
                <Link to="docker">
                    <button onClick={()=> dispatch({type: "DOCKER"})}>Docker</button>
                </Link>
            </div>
        </div>
    )
}