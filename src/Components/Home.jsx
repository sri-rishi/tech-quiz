import { Link } from "react-router-dom";
import { useData } from "../Context/dataContext";
import { NavBar } from "./nav";

export function Home() {
    const {dispatch} = useData();

    return (
        <div style={{width: "100%"}} className="body">
            <NavBar />
            <div className="cover-div">
                <div className="cover-text">
                    <h1 className="cover-line">I'm not a great programmer; I'm just a good programmer with great habits.</h1>
                    <p className="cover-subLine">Take quiz to know how well you know these things.</p>
                </div>
                <div className="cover-image-div">
                    <img className="cover-image" src="../../images\cover_img.jpg"  alt="women finding solution"/>
                </div>
            </div>
            <div className="">
                <Link to="/linux">
                    <button onClick={() => dispatch({ type: "LINUX"} ) }>Linux</button>
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