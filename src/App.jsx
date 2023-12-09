import './App.css';
import ChatArea from './components/ChatArea/ChatArea';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import UpdateBar from './components/UpdateBar/UpdateBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <section className='h-full flex flex-row items-start'>
      <SideBar/>

      <section className='home'>
        <NavBar></NavBar>
        <Home></Home>
        {/* <UpdateBar></UpdateBar>         */}
      </section>

    </section>
  );
}

export default App;
