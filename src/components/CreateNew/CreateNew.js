import { useState } from 'react';
import { useRef } from 'react';
import Loggedin from '../LoggedIn/Loggedin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function CreateNew() {

  const userRef = useRef();
  const errRef = useRef();
  
  const [user,setUser] = useState('');
  const [nick,setNick] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');  

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user, password);
  setUser('');
  setPassword('');

}

  return (
  <section>

        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
         <div className="card" style={{ width: '600px', display: 'flex', marginRight: '10px'}}>
           <div className="card-body">
             <h1 className="card-title">Create New Account</h1>
             <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                <span className="card-subtitle mb-2 text-muted" style={{ marginRight: '5px' }}>Already A Member?</span>
                <Link to="/LogIn" className="card-link" id="login">Log In</Link>
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

                <div className="mb-3">
                  <input type="text" className="form-control"  placeholder='Nick Name' 
                      // ref={nickRef}
                     onChange={(e) => setNick(e.target.value)}
                       value = {nick}
                       required></input>
                </div>
               <button type="submit" className="btn btn-primary" >Submit</button>
              </form>
           </div>
         </div>
  
       </div>
  
      </section>

  );
}

export default CreateNew;