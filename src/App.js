import './App.css';
import {Header} from './compoents/Header';
import {Sidebar} from './compoents/Sidebar';
import {Maininfo} from './compoents/Maininfo';


function App() {
  return (
    <div className="App">
      <Header title={"Spotify Clone"}/>
      <Sidebar />
      <Maininfo />
    </div>
  );
}

export default App;
