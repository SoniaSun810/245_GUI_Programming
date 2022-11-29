// CSS and other resources
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
