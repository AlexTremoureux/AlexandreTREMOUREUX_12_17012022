import Logo from "../components/Logo";
import NavHorizontale from "../components/NavHorizontale";
import NavVerticale from "../components/NavVerticale";
import "../styles/App.css";
import Router from "../utils/Router";

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <NavHorizontale />
      </header>
      <div className="mainContainer">
        <NavVerticale />
        <Router />
      </div>
    </div>
  );
}

export default App;
