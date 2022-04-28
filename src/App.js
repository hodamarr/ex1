import './App.css';
import Loggedin from './components/LoggedIn/Loggedin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateNew from './components/CreateNew/CreateNew';
import LogInScreen from './components/LogInScreen/LogInScreen';
import { useState} from 'react';
function App() {

  // connected user's nickName
  const [user, setUser] = useState();

  return (
    <section>
        <BrowserRouter>
          <Routes>
            <Route path="/chats" element={<Loggedin user={user} />}></Route>
            <Route path="/" element={<LogInScreen setUser={setUser}/>}></Route>
            <Route path="/register" element={<CreateNew setUser={setUser}/>}></Route>
          </Routes>
          
        </BrowserRouter>
    </section>
  );
}

export default App;