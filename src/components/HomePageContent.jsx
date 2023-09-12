import '../styles/HomePageContent.css';

import unrealEngineScreenshotOne from '../images/practice-one-screenshot-1.png';
import unrealEngineScreenshotTwo from '../images/Unreal 5 Screenshot 2.png';
import theElectronicOneLogoTitleSymbol from '../images/The_Electronic_One_Logo_Concept_Title_Symbol.png';
import striveBannerConceptTitle3 from '../images/Strive_Banner_Concept_Title_3.png';
import cerebralConceptLogo2 from '../images/Cerebral_Concept_Logo_2.png';
import react from '../images/React.png';

import twitchTvLogo from '../images/TwitchTv_Full_Logo.png';
import youtubeLogo from '../images/youtube_logo.png';

import reactRouter from '../images/React-Router.png';
import javascript from '../images/JavaScript-logo.png';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

// HomePageContent(): The home page content component container.s
export const HomePageContent = (props) => {
    const {disableProjectLinks} = props;

    useEffect(()=>{
        const projectLinks = document.querySelectorAll('#project-links > div > a > img[src]');
        for (let i = 0; i < projectLinks.length; i++)
        {
            projectLinks[i].addEventListener('mouseover', ()=>{
                console.log("Mouse is over the image.");
                projectLinks[i].classList.add('scale-project-image');
            });
        }

        for (let i = 0; i < projectLinks.length; i++)
        {
            projectLinks[i].addEventListener('mouseout', ()=>{
                console.log("Mouse is not over the image.");
                projectLinks[i].classList.remove('scale-project-image');
            });
        }
    });

    return (
        <div className="home-page-content-component-container">
            <div id="tools">
                <div id="tools-unreal-engine">
                    <h2>Unreal Engine</h2>

                    <img 
                        src={unrealEngineScreenshotOne}
                        alt="Unreal Engine Screenshot One"
                    />

                    <div>
                        The Unreal Engine will be our first choice when it comes
                        to using a powerful 3D Engine to create computer and console games. 
                    </div>

                    <img 
                        src={unrealEngineScreenshotTwo}
                        alt="Unreal Engine Screenshot Two"
                    />
                </div>

                <div id="tools-fullstack-development">
                    <h2>FullStack Development</h2>

                    <div>
                        <img 
                            src={react}
                            alt="React Logo"
                        />

                        <img 
                            src={reactRouter}
                            alt="React Router Logo"
                        />

                        <img 
                            src={javascript}
                            alt="JavaScript Logo"
                        />
                    </div>
                    <div>
                        Most of our browser applications will be designed with various
                        fullstack development tools and frameworks such as React Js,
                        Node.Js, React Router, JavaScript, and many more.
                    </div>
                </div>
            </div>

            <div id="projects">
               <h2>Projects</h2>

               <div id="project-links">
                    {disableProjectLinks ?
                        <>
                            <div>
                                <Link>
                                    <img 
                                        src={theElectronicOneLogoTitleSymbol}
                                        alt="The Electronic One Logo Symbol"
                                    />
                                </Link>
                            </div>

                            <div>
                                <Link>
                                    <img 
                                        src={striveBannerConceptTitle3}
                                        alt="Strive Banner Concept Title 3"
                                    />
                                </Link>
                            </div>

                            <div>
                                <Link>
                                    <img 
                                        src={cerebralConceptLogo2}
                                        alt="Cerebral Concept Logo 2"
                                    />
                                </Link>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <Link to="/projects/The Electronic One">
                                    <img 
                                        src={theElectronicOneLogoTitleSymbol}
                                        alt="The Electronic One Logo Symbol"
                                    />
                                </Link>
                            </div>

                            <div>
                                <Link to="/projects/Strive">
                                    <img 
                                        src={striveBannerConceptTitle3}
                                        alt="Strive Banner Concept Title 3'"
                                    />
                                </Link>
                            </div>

                            <div>
                                <Link to="/projects/Cerebral">
                                    <img 
                                        src={cerebralConceptLogo2}
                                        alt="Cerebral Concept Logo 2"
                                    />
                                </Link>
                            </div>
                        </>
                    }
               </div>         
            </div>

            <div id="streaming">
                <h2>Streaming</h2>

                <div>
                    <Link to="#">
                        <img 
                            src={twitchTvLogo}
                            alt="TwitchTv Logo"
                        />
                    </Link>

                    <Link to="#">
                        <img 
                            src={youtubeLogo}
                            alt="YouTube Logo"
                        />
                    </Link>
                </div>

                <div>
                    Twitch and YouTube are two platforms where you can find SoSuThirteen. SoSuThirteen is our streaming
                    subsidiary platform where we will be streaming various amount of games from retro to current generation.
                </div>
            </div>
        </div>
    );
}

// HomePageContent PropTypes: 
HomePageContent.propTypes = {
    disableProjectLinks: PropTypes.bool,
};