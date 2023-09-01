import './styles/App.css';
import './styles/WorkspaceWindow.css';
import './styles/NavDropdown.css';
import { HomePageContent } from './components/HomePageContent';
import { WorkspaceLogin } from './components/WorkspaceLogin';
import { CloseButton } from './components/CloseButton';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';

// workspace variant:
const workspace ={
  hidden: {x: "100%"},
}

// navDropdown variant:
const navDropdown = {
  open: {x: [0, 150, 0], y: [0, 200, 0], scale: [1, 1, 1, 10, 1], borderRadius: [270, 270, 270, 0, 0], width: "100%", height: "100%", opacity: 0.8},
  close: {x: 0},
}

// App(): The root component container.
const App = () => {
  const [displayWorkspaceWindow, setDisplayWorkspaceWindow] = useState(false);
  const [displayNavDropdown, setDisplayNavDropdown] = useState(false);
  const [displayNavDropdownContent, setDisplayNavDropdownContent] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setDisplayNavDropdownContent(true);
    }, 1200);
  })

  function workspaceStation(e){
    console.log("Workspace Station");
    console.log(e.target);
    setDisplayWorkspaceWindow(true);
  }

  function handleClick(){
    console.log("Nav Button Clicked!");
    setDisplayNavDropdown(true);
  }

  return (
    <div className="app-component-container">
      <div>
        <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
        </button>

        <button onClick={workspaceStation}>Workspace Station</button>
      </div>

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
                  <CloseButton />
                  :
                  null
                }
              </>
              : 
              null
            }
      </motion.div>

      <motion.div
        className="workspace-window-component-container"
        variants={workspace}
        initial="hidden"
        animate={{x: displayWorkspaceWindow ? 0 : "100%"}}
        transition={{duration: 0.8, ease: "easeIn", type: "spring", bounce: 0.3}}>
          
          {displayWorkspaceWindow  && (
            <>
              <CloseButton 
                setDisplayWorkspaceWindow={setDisplayWorkspaceWindow}
              />
              <WorkspaceLogin/>
            </>
          )}
      </motion.div>


      <h1>SoSu Studio Documentation</h1>
      <p>Powered & Controlled by SoSu Plus +</p>

      <HomePageContent />
    </div>
  );
}

export default App;