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
        <button onClick={workspaceStation}>Workspace Station</button>
      </div>

      {displayWorkspaceWindow ? 
        <WorkspaceWindow />
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