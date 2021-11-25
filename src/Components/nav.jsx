import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/linux">Linux</NavLink>
            <NavLink to="/devops">DevOps</NavLink>
            <NavLink to="/docker">Docker</NavLink>
        </nav>
    )
}