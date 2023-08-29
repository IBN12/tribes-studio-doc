import { Link } from "react-router-dom";

// Workspace(): The workspace component container.
export const Workspace = () => {
    // const navigate = useNavigate();

    return(
        <div className="work-space-component-container">
            <Link to="/" replace={true}>Back to home</Link>
            <h1>SoSu Workspace</h1>
        </div>
    );
}