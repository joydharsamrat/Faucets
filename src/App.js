import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { useState } from 'react';
import MyModal from './Components/Modal';


function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='App'>
      <Home setModalShow={setModalShow}></Home>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
