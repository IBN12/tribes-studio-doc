import '../styles/HomePageContent.css';
import unrealEngineScreenshotOne from '../images/practice-one-screenshot-1.png';
import unrealEngineScreenshotTwo from '../images/Unreal 5 Screenshot 2.png';
import react from '../images/React.png';
import reactRouter from '../images/React-Router.png';
import javascript from '../images/JavaScript-logo.png';

// HomePageContent(): The home page content component container.s
export const HomePageContent = () => {
    return (
        <div className="home-page-content-component-container">
            <div id="tools">Tools</div>

            <div id="unreal-engine">
                <img 
                    src={unrealEngineScreenshotOne} 
                    alt="Unreal Engine Screenshot One"
                />
                
                <div>
                    Unreal Engine
                </div>

                <div>
                    The Unreal Engine will be our first choice when it comes
                    to using a powerful 3D Engine to create computer and console games.
                </div>

                
                <img 
                    src={unrealEngineScreenshotTwo}
                    alt="Unreal Engine Screenshot Two"     
                />    
            </div>

            <div id="fullstack-development">
                <div>FullStack Development</div>
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
    );
}