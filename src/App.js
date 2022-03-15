import './App.css';
// import {Header} from './compoents/Header';
// import {Sidebar} from './compoents/Sidebar';
import {Maininfo} from './compoents/Maininfo';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {Login} from './Views/Login'





function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path='/login' element={ <Login />}/>
            <Route path='/maininfo' element={ <Maininfo />}/>
          </Routes>
        </Router>
    </div>
  );
}

  

export default App;
/* <Login /> */
      /* <Header title={"Spotify Clone"}/>
      <Sidebar />
      <Maininfo /> */