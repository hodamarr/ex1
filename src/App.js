import './App.css';
import Loggedin from './components/LoggedIn/Loggedin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateNew from './components/CreateNew/CreateNew';
import LogInScreen from './components/LogInScreen/LogInScreen';
function App() {



  return (
    <section>
        <BrowserRouter>
          <Routes>
            <Route path="/chats" element={<Loggedin />}></Route>
            <Route path="/LogIn" element={<LogInScreen />}></Route>
            <Route path="/" element={<CreateNew />}></Route>
          </Routes>
          
        </BrowserRouter>
    </section>
  );
}

export default App;