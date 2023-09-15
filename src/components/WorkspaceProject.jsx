import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";

import sosuBackgroundNoStudio from "../images/sosu_logo_design/SoSu_Studio_Background_NoStudio.png"; 
import sosuBackgroundWithStudio from "../images/sosu_logo_design/SoSu_Studio_Background_With_Studio.png";
import sosuBackgroundImage from "../images/sosu_logo_design/SoSu_Studio_Background_Image.png";

import { FooterContent } from "./FooterContent";

import "../styles/WorkspaceProject.css";

// WorkspaceProject(): The the workspace project component container.
export const WorkspaceProject = () =>{
    const {workspaceId} = useParams()

    useEffect(() => {
        const body = document.querySelector('body');
        body.removeAttribute("style"); 
    });

    return(
        <div className="workspace-projects-component-container">
            <Outlet />
            {workspaceId === "Logo Design" ?
                (<h1>SoSu Logo Design Build</h1>)
                :
                workspaceId === "Strive Cards" ?
                (<h1>Five New Strive Cards For Development</h1>)
                :
                workspaceId === "The Electronic One Characters" ?
                (<h1>Two Character References To Design For The Electronic One</h1>)
                :
                null
            }

            <div className="workspace-content-section">
                {workspaceId === "Logo Design" ?
                    (
                        <>
                            <div>
                                <img
                                    src={sosuBackgroundWithStudio}
                                    alt="Sosu Studio With Background and Studio"
                                />
                            </div>

                            <div>
                                <img 
                                    src={sosuBackgroundNoStudio}
                                    alt="Sosu Studio With Background and No Studio"
                                />
                            </div>

                            <div>
                                <img 
                                    src={sosuBackgroundImage}
                                    alt="Sosu studio With Background and Image"
                                />
                            </div>

                            <div>
                                <Link to="https://github.com/IBN12/tribes-studio-doc/tree/main/src/images/sosu_logo_design">
                                    Location to download the logo
                                </Link>
                            </div>
                        </>
                    
                    )
                    :
                    null
                }
            </div>

            <FooterContent />
        </div>
    );
}