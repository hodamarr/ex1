import './App.css';
<<<<<<< HEAD
=======

>>>>>>> b3cfa4f3d9933115f6fb1abe3354b5ddb0e0e3a8
import Loggedin from './components/LoggedIn/Loggedin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateNew from './components/CreateNew/CreateNew';
import LogInScreen from './components/LogInScreen/LogInScreen';
function App() {

<<<<<<< HEAD


  return (
=======


  return (ta
>>>>>>> b3cfa4f3d9933115f6fb1abe3354b5ddb0e0e3a8
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