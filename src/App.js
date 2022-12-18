import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'
import classes from './components/Main.module.css'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Main />
    </div>
  );
}

export default App;
