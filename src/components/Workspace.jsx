import "../styles/Workspace.css";

import { Link } from "react-router-dom";
// Workspace(): The workspace component container.
export const Workspace = () => {
    return(
        <div className="workspace-component-container">
            <h2>Workspace Station</h2>
            
            <div>
                <p>Date: September-5-2023</p>
                <Link to="workspace/Logo Design">SoSu Logo Design Build</Link>
            </div>
        </div>
    );
}