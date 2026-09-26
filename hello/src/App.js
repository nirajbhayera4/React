import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import EventHandler from './components/EventHandler'
import EventBind from './components/EventBind'
function App() {
  return (
    <div className="App">
      <Counter />
      <Greet name="bruce" heroname="superman" />
      {/* <Greet /> */}
      {/*<Greet name="bruce" hero="superman"><p>This is children props</p></Greet>
      <Greet name="james" hero="batman"/>
      <Greet name="peter" hero="spiderman"/>
      */}
      <Welcome name="bruce" heroname="superman" />
      <FunctionClick />
      <EventHandler />
      <EventBind />

      {/*<Message />*/}

           {/* <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
