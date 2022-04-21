import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import Loggedin from './LoggedIn/Loggedin';


function App() {

  const userRef = useRef();
  const errRef = useRef();
  
  const [user,setUser] = useState('');
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
         <div className="card" style={{ width: '600px', display: 'flex', marginRight: '10px' }}>
           <div className="card-body">
             <h1 className="card-title">Create New Account</h1>
             <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                <span className="card-subtitle mb-2 text-muted" style={{ marginRight: '5px' }}>Already A Member?</span>
               <a href="#" className="card-link">Log In</a>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text"
                   className="form-control"
                    placeholder='User Name'
                    ref={userRef}
                     onChange={(e) => setUser(e.target.value)}
                       value = {user}
                       required
                     ></input> 
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control"  placeholder='Password' 
                      ref={userRef}
                     onChange={(e) => setPassword(e.target.value)}
                       value = {password}
                       required></input>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                   <label className="form-check-label" for="exampleCheck1">Check me out</label>
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
              </form>
           </div>
         </div>
  
       </div>
  
      </section>

  );
}

export default App;