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
                    <div className="quiz-links linux-quiz">
                        <Link to="/linux">
                            <button className="quiz-img-link" onClick={() => dispatch({ type: "LINUX"} ) }>
                                <img src="../../images/linux-cover.png" alt="linux cover" />
                            </button>
                        </Link>
                        <div className="quiz-captions linux-caption">
                            <p>Check how much you know about Linux</p>
                            <Link to="/linux">
                                <button className="btn-play linux-btn" onClick={() => dispatch({ type: "LINUX"} ) }>
                                    Play Quiz   
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="quiz-links docker-quiz">
                        <Link to="/docker" >
                            <button className="quiz-img-link" onClick={()=> dispatch({type: "DOCKER"})}>   
                            <img  src="../../images/docker-cover.png" alt="docker cover" />
                            </button>
                            </Link>
                        <div className="quiz-captions linux-caption">
                            <p>Check how much you know about Docker</p>
                            <Link to="/docker">
                            <button className="btn-play docker-btn" onClick={()=> dispatch({type: "DOCKER"})}>
                                Play Quiz
                            </button>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="quiz-links docker-quiz">
                        <Link to="/devops" >
                            <button className="quiz-img-link" onClick={() => dispatch({type: "DEVOPS"})}>   
                            <img src="../../images/devops-cover.png" alt="devops cover" />
                            </button>
                            </Link>
                        <div className="quiz-captions linux-caption">
                            <p>Check how much you know about DevOps</p>
                            <Link to="/devops">
                            <button className="btn-play devops-btn" onClick={() => dispatch({type: "DEVOPS"})}>
                                Play Quiz
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}