import './styles/App.css';
import { HomePageContent } from './components/HomePageContent';

// App(): The root component container.
const App = () => {
  return (
    <div className="app-component-container">
      <h1>Tribes Studio Documentation</h1>
      <p>Powered & Controlled by Tribes Plus +</p>

      <HomePageContent/>
    </div>
  );
}

export default App;