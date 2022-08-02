import logo from './logo.svg';
import './App.css';
import { CounterButton } from './CounterButton';
import { Counter } from './MobX/Counter';
import { CounterProvider } from './Context/Provider/CounterProvider';

// Pass MobX store via context

//Instantiate Counter Class
//const counter = new Counter();

//State management with MobX, pass counter via Context Provider
function App() {
  return (
    <CounterProvider>
      <h3>State Management With MobX Using Context Provider</h3>
      <CounterButton />
    </CounterProvider>
  );
}

export default App;
