// CSS and other resources
import "./App.css";

// External Libraries
import { BrowserRouter } from "react-router-dom";

// Components
import IntegratedView from "./components/IntegratedView";

function App() {

  return (
        <BrowserRouter>
          <div className="App">
            <IntegratedView />  
          </div>
        </BrowserRouter>  
    );
}

export default App;
