import './styles/App.css';
import './styles/WorkspaceWindow.css';
import './styles/NavDropdown.css';

import { HomePageContent } from './components/HomePageContent';
import { CloseButton } from './components/CloseButton';
import { Workspace } from './components/Workspace';
import { FooterContent } from './components/FooterContent';
import { ProjectDropdownMenu } from './components/ProjectDropdownMenu';

import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

// workspace variant:
const workspace ={
  hidden: {x: "100%"},
  visible: {x: 0, opacity: 0.9 }
}

// navDropdown variant:
const navDropdown = {
  open: {x: [0, 150, 0], y: [0, 200, 0], scale: [1, 1, 1, 10, 1], borderRadius: [270, 270, 270, 0, 0], width: "100%", height: "100%", opacity: 0.95},
  close: {x: [0, 150, 0], y: [0, 200, 0], scale: [1, 10, 1, 1, 1], borderRadius: [0, 0, 270, 270, 270], width: "0", height: "0", opacity: 0.95},
}

// projectMennuAnimate variant: 
const projectMenuAnimate = {
  enter: {
    rotateX: 0,
    transition: {
      duration: 0.2
    },
    display: "block"
  },
  
  exit: {
    rotateX: -50,
    transition: {
      duration: 0.1,
      delay: 0.1
    },
    transitionEnd:{
      display: "none"
    }
  }
}

// App(): The root component container.
const App = () => {
  const [displayWorkspaceWindow, setDisplayWorkspaceWindow] = useState(false);
  const [displayNavDropdown, setDisplayNavDropdown] = useState(false);
  const [displayNavDropdownContent, setDisplayNavDropdownContent] = useState(false);
  const [disableProjectLinks, setDisableProjectLinks] = useState(false);
  const [disableNavigationLinks, setDisableNavigationLinks] = useState(false);
  const [disableWorkspaceStationButton, setDisableWorkspaceStationButton] = useState(false);
  const [disableFooterLinks, setDisableFooterLinks] = useState(false);
  const [displayMobileDropdown, setDisplayMobileDropdown] = useState(false);
  const [displayProjectMenu, setDisplayProjectMenu] = useState(false);
  
  useEffect(()=>{
    // Checks if the browser window width is less than 600.
    if (window.innerWidth <= 600)
    {
      console.log(`The inner width of the window is less than 600`); // Testing
      setDisplayMobileDropdown(true);
    }

    // Checks if the browser window has been resized. 
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 600)
      {
        setDisplayMobileDropdown(true);
      }
      else
      {
        setDisplayMobileDropdown(false);
      }
    });

    // Checks if the browser window has been reloaded. 
    window.addEventListener('load', () => {
      if (window.innerWidth <= 600)
      {
        setDisplayMobileDropdown(true);
      }
      else
      {
        setDisplayMobileDropdown(false);
      }
    });
  }, []);

  // Workspace Station function:
  function workspaceStation(e){
    console.log("Workspace Station");
    console.log(e.target);
    setDisplayWorkspaceWindow(true);
    setDisableProjectLinks(true);
    setDisableNavigationLinks(true);
    setDisableFooterLinks(true);

    const body = document.querySelector('body');
    body.setAttribute('style', 'overflow-y: hidden');
  }

  // Mobile Navigation dropdown function:
  function navigationDropdown(){
    console.log("Nav Button Clicked!");

    setTimeout(()=>{
      setDisplayNavDropdownContent(true);
    }, 600);

    setDisplayNavDropdown(true);
    setDisableProjectLinks(true);
    setDisableWorkspaceStationButton(true);
    setDisableFooterLinks(true);

    const body = document.querySelector('body');
    body.setAttribute('style', 'overflow-y: hidden');
  }

  // toggleProjectMenu(): Will toggle the project dropdown menu from the project link.
  const toggleProjectMenu = () =>{
    setDisplayProjectMenu(!displayProjectMenu);
  }

  return (
    <div className="app-component-container">
      <div>
        {displayMobileDropdown && (
          <button disabled={disableNavigationLinks} onClick={navigationDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </button>
        )}

        {!displayMobileDropdown && (
          <motion.div
            className="project-dropdown-link"
            onMouseEnter={toggleProjectMenu}
            onMouseLeave={toggleProjectMenu}
            >
            Projects

            <motion.div 
              className="project-dropdown-menu"
              initial="exit"
              animate={displayProjectMenu ? "enter" : "exit"}
              variants={projectMenuAnimate}
              >
                <ProjectDropdownMenu /> 
            </motion.div>
          </motion.div>
        )}

        <div>
          <button disabled={disableWorkspaceStationButton} onClick={workspaceStation}>Workspace Station</button>
        </div>
      </div>

      {/* Dropdown Menu Container */}
      <motion.div 
          className="nav-dropdown-component-container"
          variants={navDropdown}
          initial="close"
          transition={{duration: 0.8, ease:"easeInOut"}}
          animate={displayNavDropdown ?
            "open"
            :
            "close"
          }>
            {displayNavDropdown ? 
              <>
                {displayNavDropdownContent ?
                  <>
                    <CloseButton
                      displayWorkspaceWindow={displayWorkspaceWindow}
                      displayNavDropdown={displayNavDropdown}
                      setDisplayWorkspaceWindow={setDisplayWorkspaceWindow}
                      setDisplayNavDropdown={setDisplayNavDropdown}
                      setDisplayNavDropdownContent={setDisplayNavDropdownContent}
                      setDisableProjectLinks={setDisableProjectLinks}
                      setDisableWorkspaceStationButton={setDisableWorkspaceStationButton}
                      setDisableFooterLinks={setDisableFooterLinks}
                    />
                    <div className="nav-dropdown-content">
                      <h2>Projects</h2>
                      <Link to="/projects/The Electronic One">The Electronic One</Link>
                      <Link to="projects/Strive">Strive</Link>
                      <Link to="projects/Cerebral">CEREBRAL: THE FINAL HOPE</Link>
                    </div>
                  </>
                  :
                  null
                }
              </>
              : 
              null
            }
      </motion.div>
      
      {/* Workspace Window Container */}
      <motion.div
        className="workspace-window-component-container"
        variants={workspace}
        initial="hidden"
        animate={displayWorkspaceWindow ?
          "visible"
          :
          "hidden"
        }
        transition={{duration: 0.6, ease: "easeIn", type: "spring", bounce: 0.3}}>
          
          {displayWorkspaceWindow  && (
            <>
              <CloseButton 
                displayWorkspaceWindow={displayWorkspaceWindow}
                displayNavDropdown={displayNavDropdown}
                setDisplayWorkspaceWindow={setDisplayWorkspaceWindow}
                setDisplayNavDropdown={setDisplayNavDropdown}
                setDisplayNavDropdownContent={setDisplayNavDropdownContent}
                setDisableProjectLinks={setDisableProjectLinks}
                setDisableNavigationLinks={setDisableNavigationLinks}
                setDisableFooterLinks={setDisableFooterLinks}
              />

              <Workspace />
            </>
          )}
      </motion.div>


      <h1>SoSu Studio Documentation</h1>
      <p>Powered & Controlled by SoSu Plus +</p>

      <HomePageContent
        disableProjectLinks={disableProjectLinks}
      />

      <FooterContent disableFooterLinks={disableFooterLinks} />
    </div>
  );
}

export default App;