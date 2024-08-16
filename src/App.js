import Nav from './task9-portfolio/Components/Nav'
import Profile from './task9-portfolio/Components/Profile';

import CounterApplication from "./task10-counter-app/CounterApp";

import Check from "./task11-cnct-mngr-login/Components/Check";
import MainComp from "./task11-cnct-mngr-login/Components/MainComp";

import CountComp from './task12-count-comp/CountComp';
import TimeComp from './task12-count-comp/time';
import TodoMain from './task13-to-do-app-hoc/Main';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Nav fName="Likhita" lName="Konathala"></Nav>
      <Profile></Profile> */}

      <BrowserRouter>
        <Link to='/navbar'>Nav</Link>
        <Link to='/profile'>Profile</Link>
        <Routes>
          <Route path='/navbar' element={<Nav></Nav>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>

      {/* <CounterApplication></CounterApplication> */}

      {/* <MainComp></MainComp> */}
      {/* <Check></Check> */}

      {/* <CountComp></CountComp> */}
      {/* <TimeComp msg='this is a prop value updated from parent comp' ></TimeComp> */}
      {/* <TodoMain></TodoMain> */}

    </div>
  );
}

export default App;
