import Logo from '../components/Logo';
import Name from '../components/Name';
import NavHorizontale from '../components/NavHorizontale';
import NavVerticale from '../components/NavVerticale';
import '../styles/header.css'


function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <NavHorizontale />
      </header>
      <NavVerticale />

      <Name />
      
      {/*
      <User-today-score />
      <User-keydata />

      <User-activity />

      <User-average-sessions />

      <User-performance />
      */}
      
      
      
    </div>
  );
}

export default App;
