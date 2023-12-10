import './App.css';
import ChatArea from './components/ChatArea/ChatArea';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import UpdateBar from './components/UpdateBar/UpdateBar';
import Home from './pages/Home/Home';
import Questions from './pages/Questions/Questions';
import Projects from './pages/Projects/Projects';
import Connections from './pages/Connections/Connections';
import {Route, Routes, Link} from "react-router-dom";
import React, { lazy } from 'react';


function App() {
  return (
    <>
    

    <section className='h-full flex flex-row items-start'>
        <SideBar/>
        <section className='p-3 grow-[3] gap-3 h-screen flex overflow-visible'>
          <section className='flex flex-col gap-3 h-full grow-[6]'>
            <NavBar></NavBar>
            <Routes>
              <Route 
                path='/' 
                element={<Home/>}
                key='Home'>
              </Route> 
              <Route 
                path='/Connections' 
                element={<Connections/>}
                key='Connections'>
              </Route>
              <Route 
                path='/Projects' 
                element={<Projects/>}
                key='Projects'>
              </Route>
              <Route 
                path='/Questions' 
                element={<Questions/>}
                key='Questions'>
              </Route>
            </Routes>
          </section>    
          <UpdateBar></UpdateBar>
        </section>

    </section>
    </>
  );
}

export default App;
