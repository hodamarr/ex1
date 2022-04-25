import './App.css';
import Loggedin from './components/LoggedIn/Loggedin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateNew from './components/CreateNew/CreateNew';
import LogInScreen from './components/LogInScreen/LogInScreen';
import { useState} from 'react';
function App() {

  const [user, setUser] = useState();
  console.log('user', user)

  return (
    <section>
        <BrowserRouter>
          <Routes>
            <Route path="/chats" element={<Loggedin user={user} />}></Route>
            <Route path="/LogIn" element={<LogInScreen setUser={setUser}/>}></Route>
            <Route path="/" element={<CreateNew />}></Route>
          </Routes>
          
        </BrowserRouter>
    </section>
  );
}

export default App;