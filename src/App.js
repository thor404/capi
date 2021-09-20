import logo from './logo.svg';
import './App.css';
import Ship from './Components/Ship/Ship';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Ship></Ship>
    </div>
  );
}

export default App;
