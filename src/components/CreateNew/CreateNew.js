import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { add_user, isNameExist } from '../../users';

function CreateNew(props) {
  const [user,setUser] = useState('');
  const [nick,setNick] = useState('');
  const [password, setPassword] = useState('');
  const [pic, setPic] = useState();
  const [userErrMsg, setUserErrMsg] = useState('');  
  const [nickErrMsg, setNickErrMsg] = useState('');  
  const [passErrMsg, setPassErrMsg] = useState('');  
  const navigator = useNavigate();

    // Username consists of alphanumeric characters (a-zA-Z0-9), lowercase, or uppercase.
    // Username allowed of the dot (.), underscore (_), and hyphen (-).
    // The dot (.), underscore (_), or hyphen (-) must not be the first or last character.
    // The dot (.), underscore (_), or hyphen (-) does not appear consecutively, e.g., java..regex
    // The number of characters must be between 5 to 20.

    const handleSubmit = async (e) => {
      e.preventDefault();
      const isExist = isNameExist(user);

      if(isExist){
        setUserErrMsg("This Username is already taken!")
      }
      const nameregex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
      if (!nameregex.test(user)){setUserErrMsg("username should contain 5-20 chars!")}

      const passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordregex.test(password)){setPassErrMsg("password should contain 8 chars, at least one letter and one number")}

      // const nickregex = /^{0 ,15}$/;
      // if (!nickregex.test(nick)){setNickErrMsg("nick max size is 10 letters")}
      if(!isExist && !nickErrMsg && !passErrMsg){
        props.setUser(user);
        add_user(user,nick,password,pic);
        navigator("/chats");
      }
    }
  return (
      <section>
          <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
              <div className="card" style={{ width: '600px', display: 'flex', marginRight: '10px'}}>
                  <div className="card-body">
                      <h1 className="card-title">Create New Account</h1>
                      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                          <span className="card-subtitle mb-2 text-muted" style={{ marginRight: '5px' }}>Already A Member?</span>
                          <Link to="/" className="card-link" id="login">Log In</Link>
                      </div>
                      <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                              <input type="text" className="form-control" placeholder="User Name"
                                     onChange={(e) => setUser(e.target.value)}
                                     value={user} required></input>
                              <span>{userErrMsg}</span>
                          </div>
                          <div className="mb-3">
                              <input type="password" className="form-control" placeholder="Password"
                                     onChange={(e) => setPassword(e.target.value)}
                                     value={password} required/>
                              <span>{passErrMsg}</span>
                          </div>
                          <div className="mb-3">
                              <input type="text" className="form-control" placeholder="Nick Name"
                                     onChange={(e) => setNick(e.target.value)}
                                     value={nick} required/>
                              <span>{nickErrMsg}</span>
                          </div>
                          <div className="App">
                              <input type="file" accept="image/*"
                                     onChange={(e) => setPic(URL.createObjectURL(e.target.files[0]))}
                                     id="addphoto" required/>
                              <br/>
                          </div>
                          <button type="submit" className="btn btn-primary" id="submit">Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default CreateNew;