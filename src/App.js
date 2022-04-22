import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import Loggedin from './components/LoggedIn/Loggedin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateNew from './components/CreateNew/CreateNew';
import LogInScreen from './components/LogInScreen/LogInScreen';
function App() {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [suc, setSuc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password);
    setUser('');
    setPassword('');
    setSuc(true);
  }

  return (
    <section>
      <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/chats" element={<Loggedin />}></Route>
            <Route path="/LogIn" element={<LogInScreen />}></Route>
            <Route path="/" element={<CreateNew />}></Route>
          </Routes>
          <Link to="/chats"> Done</Link>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;