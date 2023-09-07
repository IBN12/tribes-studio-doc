import { Link } from "react-router-dom";

import instagramLogo from "../images/instagram_logo.png";
import twitchLogo from "../images/twitch_logo.png";
import youtubeLogo from "../images/youtube_logo.png";

import "../styles/FooterComponent.css";

// FooterContent(): The footer content component container.
export const FooterContent = () =>{
    return(
        <div className="footer-content-component-container">
            <div>
                <h2>Join The Journey</h2>
            </div>

            <div>
                <Link to="https://www.instagram.com/sosutechstudio/">
                    <img 
                        src={instagramLogo}
                        alt="Instagram Logo"
                    />
                </Link>

                <Link to="#">
                    <img 
                        src={twitchLogo}
                        alt="Twitch Logo"
                    />
                </Link>

                <Link to="#">
                    <img
                        src={youtubeLogo}
                        alt="YouTube Logo"
                    />
                </Link>
            </div>

            <div>&#169; 2023 SoSu Studio</div>
        </div>
    );
}