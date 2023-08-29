import { Link } from "react-router-dom";
import '../styles/Navigation.css';

// Navigation(): The navigation component container.
export const PageNavigation = () => {
    return(
        <div className="navigation-component-container">
            <Link to="/">Back to Home</Link>
        </div>
    );
}