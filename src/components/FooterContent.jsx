import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import instagramLogo from "../images/instagram_logo.png";
import twitchLogo from "../images/twitch_logo.png";
import youtubeLogo from "../images/youtube_logo.png";

import "../styles/FooterComponent.css";

import PropTypes from 'prop-types';

// FooterContent(): The footer content component container.
export const FooterContent = (props) =>{
    const {disableFooterLinks} = props;
    const [instagramLink, setInstagramLink] = useState("");
    const [twitchLink, setTwitchLink] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");

    useEffect(() => {
        if (disableFooterLinks)
        {
            setInstagramLink("#");
            setTwitchLink("#");
            setYoutubeLink("#");
        }
        else
        {
            setInstagramLink("https://www.instagram.com/sosutechstudio/");
            setTwitchLink("#"); // TODO: Change to actual TwitchTv channel soon.
            setYoutubeLink("#"); // TODO: Change to acutal YouTube Channel.
        }
    }, [disableFooterLinks]);

    return(
        <div className="footer-content-component-container">
            <div>
                <h2>Join The Journey</h2>
            </div>

            <div>
                <Link to={ `${instagramLink}`}>
                    <img 
                        src={instagramLogo}
                        alt="Instagram Logo"
                    />
                </Link>

                <Link to={`${twitchLink}`}>
                    <img 
                        src={twitchLogo}
                        alt="Twitch Logo"
                    />
                </Link>

                <Link to={`${youtubeLink}`}>
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

// FooterContent PropType:
FooterContent.propTypes ={
    disableFooterLinks: PropTypes.bool,
}