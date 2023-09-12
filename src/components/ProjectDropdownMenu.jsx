import { Link } from "react-router-dom";

import "../styles/ProjectDropdownMenu.css";

// ProjectDropdown(): The project dropdown component container.
export const ProjectDropdownMenu = () =>{
    return (
        <div className="project-dropdown-component-container">
            <div>
                <Link to="projects/The Electronic One">
                    The Electronic One
                </Link>
            </div>

            <div>
                <Link to="projects/Strive">
                    Strive
                </Link>
            </div>

            <div>
                <Link to="projects/Cerebral">
                    Cerebral
                </Link>
            </div>
        </div>
    );
}