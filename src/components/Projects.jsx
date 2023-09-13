import { Outlet, useParams} from "react-router-dom"
import { useEffect, useState, useLayoutEffect } from "react";

import '../styles/Projects.css';

import theElectronicOneLogoConceptTitleSymbol from '../images/The_Electronic_One_Logo_Concept_Title_Symbol.png';
import striveBannerConceptTitle3 from '../images/Strive_Banner_Concept_Title_3.png';
import cerebralConceptLogo2 from '../images/Cerebral_Concept_Logo_2.png';

import { FooterContent } from "./FooterContent";

// Projects(): This is the projects component container.
export const Projects = () => {
    const {projectId} = useParams();
    const [isMobileBrowser, setIsMobileBrowser] = useState(false);

    useLayoutEffect(() =>{
        window.scrollTo(0, 0);
    });

    useEffect(()=>{
        console.log("URL Parameters: ", projectId);
        const body = document.querySelector('body');
        body.removeAttribute('style');

        // Checks the window browser width.
        if (window.innerWidth <= 600)
        {
            console.log("The window width is less than 600px"); // Testing
            setIsMobileBrowser(true);
        }
        else
        {
            console.log("The window width is greater then 600px"); // Testing
            setIsMobileBrowser(false);
        }
        
        // Event checks the window broswer width during a resize.
        window.addEventListener('resize', ()=>{
            if (window.innerWidth <= 600)
            {
                console.log("Resized: The window width is less than 600px"); // Testing
                setIsMobileBrowser(true);
            }
            else
            {
                console.log("Resized: The window width is greater than 600px"); // Testing
                setIsMobileBrowser(false);
            }
        });

        // Event checks the window browser during a load.
        window.addEventListener('load', () => {
            if (window.innerWidth <= 600)
            {
                console.log("Load: The window width is less than 600px"); // Testing
                setIsMobileBrowser(true);
            }
            else 
            {
                console.log("Load: The window width is greater than 600px"); // Testing
                setIsMobileBrowser(false);
            }
        });

    }, [projectId]);

    return (
        <div className="projects-component-container">
            <Outlet />

            <div>
                {projectId === "The Electronic One" ? 
                    (<img
                        src={theElectronicOneLogoConceptTitleSymbol}
                        alt="The Electronic One Logo Concept Title Symbol"
                        height={ isMobileBrowser ? "200px" : "400px" }
                        width={ isMobileBrowser ? "100%" : "600px" }
                    />)
                    :
                    projectId === "Strive" ? 
                    (<img 
                        src={striveBannerConceptTitle3}
                        alt="Strive Banner Concept Title 3"
                        height="150px"
                        width="100%"
                    />)
                    :
                    projectId === "Cerebral" ?
                    (<img 
                        src={cerebralConceptLogo2}
                        alt="Cerebral Concept Logo 2"
                        height="350px"
                        width="100%"
                    />)
                    :
                    null
                }
            </div>

            <div className="project-content-section">
                <div>Content Coming Soon...</div>
            </div>

            <FooterContent />
        </div>
    );
}