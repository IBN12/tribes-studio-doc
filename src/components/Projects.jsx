import { Outlet, useParams} from "react-router-dom"
import { useEffect } from "react";

import '../styles/Projects.css';

import theElectronicOneLogoConceptTitleSymbol from '../images/The_Electronic_One_Logo_Concept_Title_Symbol.png';
import striveBannerConceptTitle3 from '../images/Strive_Banner_Concept_Title_3.png';
import cerebralConceptLogo2 from '../images/Cerebral_Concept_Logo_2.png';

// Projects(): This is the projects component container.
export const Projects = () => {
    const {projectId} = useParams();

    useEffect(()=>{
        console.log("URL Parameters: ", projectId);
    });

    return (
        <div className="projects-component-container">
            <Outlet />
            {projectId === "The Electronic One" ? 
                (<img
                    src={theElectronicOneLogoConceptTitleSymbol}
                    alt="The Electronic One Logo Concept Title Symbol"
                    height="200px"
                    width="100%"
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
    );
}