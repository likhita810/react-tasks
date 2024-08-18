import Nav from './task9-portfolio/Components/Nav'
import Profile from './task9-portfolio/Components/Profile';

import CounterApplication from "./task10-counter-app/CounterApp";

import Check from "./task11-cnct-mngr-login/Components/Check";
import MainComp from "./task11-cnct-mngr-login/Components/MainComp";

import CountComp from './task12-count-comp/CountComp';
import TimeComp from './task12-count-comp/time';
import TodoMain from './task13-to-do-app-hoc/Main';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './task14-Router-portfolio/styles/nav.css'
import './task14-Router-portfolio/styles/profile.css'
import Home from './task14-Router-portfolio/Components/Home';
import Skills from './task14-Router-portfolio/Components/Skills';
import Projects from './task14-Router-portfolio/Components/Projects';
import Education from './task14-Router-portfolio/Components/Education';
import Contact from './task14-Router-portfolio/Components/Contact';
import SignInForm from './task15-forms/SignInForm';
import RegistrationForm from './task15-forms/RegistrationForm';
import FeedbackForm from './task15-forms/FeedbackForm';

function App() {
  return (
    <div className="App">
      {/* <Nav fName="Likhita" lName="Konathala"></Nav>
      <Profile></Profile> */}

      {/* <BrowserRouter>
        <Link to='/navbar'>Nav</Link>
        <Link to='/profile'>Profile</Link>
        <Routes>
          <Route path='/navbar' element={<Nav></Nav>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter> */}
{/* 
      <BrowserRouter>
        <nav >
          <Link to = '/home'>Home</Link>
          <Link to = '/skills'>Skills</Link>
          <Link to = '/projects'>Projects</Link>
          <Link to = '/education'>Education</Link>
          <Link to = '/contact'>Contact</Link>
        </nav>

        <Routes>
          <Route path='/home' element={<Home fName='Likhita' lName='Konathala'></Home>}></Route>
          <Route path='/skills' element={<Skills></Skills>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/education' element={<Education></Education>}></Route>
          <Route path='/contact' element={<Contact num='7013884574' email='likhitakonathala@gmail.com' loc='Anakapalle, AP, India'></Contact>}></Route>
        </Routes>
        
      </BrowserRouter> */}

      {/* <CounterApplication></CounterApplication> */}

      {/* <MainComp></MainComp> */}
      {/* <Check></Check> */}

      {/* <CountComp></CountComp> */}
      {/* <TimeComp msg='this is a prop value updated from parent comp' ></TimeComp> */}
      {/* <TodoMain></TodoMain> */}

      {/* <SignInForm></SignInForm> */}
      {/* <RegistrationForm></RegistrationForm> */}
      <FeedbackForm></FeedbackForm>

    </div>
  );
}

export default App;
