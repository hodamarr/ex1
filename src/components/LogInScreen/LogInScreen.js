import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateNew from '../CreateNew/CreateNew';
import Loggedin from '../LoggedIn/Loggedin';


function LogInScreen() {
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
            <div className="card" style={{ width: '600px', display: 'flex', marginRight: '10px' }}>
                <div className="card-body">
                    <h1 className="card-title">Welcome Back<span id="dot">.</span></h1>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                        <span className="card-subtitle mb-2 text-muted" style={{ marginRight: '5px' }}>Not A Member?</span>
                        <Link to="/" className="card-link" id="login">Sign Up</Link>
                    </div>
                    <form //</div>onSubmit={handleSubmit}
                    >
                        <div className="mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder='User Name'
                            // ref={userRef}
                            //  onChange={(e) => setUser(e.target.value)}
                            //    value = {user}
                            //    required
                            ></input>
                            <span>
                            </span>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder='Password'
                            //   ref={userRef}
                            //  onChange={(e) => setPassword(e.target.value)}
                            //    value = {password}
                            //    required
                            ></input>
                        </div>
                        
                        <button type="submit" className="btn btn-primary" 
                        //need to add as part of the onClick function to change path to "./chats"
                        >Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}
export default LogInScreen;
