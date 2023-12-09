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
        <section className='p-3 grow-[9] gap-3 h-screen flex'>
          <section className='flex flex-col gap-3 h-full grow-[6]'>
            <NavBar></NavBar>
            <Home></Home>
          </section>    
          <UpdateBar></UpdateBar>
        </section>

    </section>
  );
}

export default App;
