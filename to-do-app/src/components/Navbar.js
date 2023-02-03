import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>ToDo List</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Task</Link>
            </div>
        </nav>
    );
}

export default Navbar;