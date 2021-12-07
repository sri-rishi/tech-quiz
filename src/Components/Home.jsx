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
            <div className="dashboard-div">
                <h1 className="dashboard">Dashboard</h1>
                <div className="quiz-list">
                    <Link to="/linux">
                        <button className="quiz-covers linux-cover" onClick={() => dispatch({ type: "LINUX"} ) }>
                            <img className="cover-img" src="../../images/linux-cover.png" alt="linux cover" />
                        </button>
                    </Link>
                    <Link to="docker">
                        <button className="quiz-covers docker-cover" onClick={()=> dispatch({type: "DOCKER"})}>
                            <img className="cover-img"  src="../../images/docker-cover.png" alt="docker cover" />
                        </button>
                    </Link>
                    <Link to="/devops" >
                        <button className="quiz-covers devops-cover" onClick={() => dispatch({type: "DEVOPS"})}>
                            <img className="cover-img" src="../../images/devops-cover.png" alt="devops cover" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}