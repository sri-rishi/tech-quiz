import { Link } from "react-router-dom";
import { NavBar } from "./nav";


export function Home() {
    return (
        <div>
            <NavBar />
            <div>
                <Link to="/linux">
                    <button>Linux</button>
                </Link>
                <Link to="/devops" >
                    <button>DevOps</button>
                </Link>
                <Link to="docker">
                    <button>Docker</button>
                </Link>
            </div>
        </div>
    )
}