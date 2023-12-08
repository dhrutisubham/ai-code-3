import './App.css';
import ChatArea from './components/ChatArea/ChatArea';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <section className='home'>
      <SideBar/>
      <ChatArea/>
      </section>
    </>
  );
}

export default App;
