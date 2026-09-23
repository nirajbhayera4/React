import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      <Greet name="bruce" hero="superman"><p>This is children props</p></Greet>
      <Greet name="james" hero="batman"/>
      <Greet name="peter" hero="spiderman"/>

      {/* <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
