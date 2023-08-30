import './styles/App.css';
import { HomePageContent } from './components/HomePageContent';
import { useState } from 'react';
import { WorkspaceWindow } from './components/WorkspaceWindow';

// App(): The root component container.
const App = () => {
  const [displayWorkspaceWindow, setDisplayWorkspaceWindow] = useState(false);

  function workspaceStation(e){
    console.log("Workspace Station");
    console.log(e.target);
    setDisplayWorkspaceWindow(true);
  }

  return (
    <div className="app-component-container">
      <div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg></button>
          
        <button onClick={workspaceStation}>Workspace Station</button>
      </div>

      {displayWorkspaceWindow ? 
        <WorkspaceWindow
          setDisplayWorkspaceWindow={setDisplayWorkspaceWindow}
        />
        :
        null
      }

      <h1>SoSu Studio Documentation</h1>
      <p>Powered & Controlled by SoSu Plus +</p>

      <HomePageContent />
    </div>
  );
}

export default App;