//components
import FirstComponent from "./components/FirstComponent"
import Events from "./components/Events"
import TemplateExpressions from "./components/TemplateExpressions";
import Challenge from "./components/Challenge";
import ChallengeYan from "./components/ChallengeYan";

// styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <Events />
      <TemplateExpressions />
      <Challenge />
      <ChallengeYan />
    </div>
  );
}

export default App;
