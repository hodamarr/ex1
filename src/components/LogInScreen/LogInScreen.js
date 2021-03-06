import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { is_Exist } from '../../users'

function LogInScreen(props) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userErrMsg, setUserErrMsg] = useState('');
    const [passErrMsg, setPassErrMsg] = useState('');
    const navi = useNavigate();
    // Username consists of alphanumeric characters (a-zA-Z0-9), lowercase, or uppercase.
    // Username allowed of the dot (.), underscore (_), and hyphen (-).
    // The dot (.), underscore (_), or hyphen (-) must not be the first or last character.
    // The dot (.), underscore (_), or hyphen (-) does not appear consecutively, e.g., java..regex
    // The number of characters must be between 5 to 20.

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nameregex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
        if (!nameregex.test(user)) { setUserErrMsg("username should contain 5-20 chars") }

        const passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        // minimum 8 chars, one letter one number.
        if (!passwordregex.test(password)) { setPassErrMsg("password should contain 8 chars, at least one letter and one number") }

        if (!userErrMsg && !passErrMsg) {
            let check = is_Exist(user, password)
            if (check === 1) {
                props.setUser(user);
                navi('/chats');
            } else if (check === -1) {
                setPassErrMsg("Wrong Password!")
            } else if (check === 0) {
                setUserErrMsg("Username doesn't exist!")
            }
        }
    }

    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
            <div className="card" style={{ width: '600px', display: 'flex', marginRight: '10px' }}>
                <div className="card-body">
                    <h1 className="card-title">
                        Welcome Back
                        <span id="dot">.</span>
                    </h1>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                        <span className="card-subtitle mb-2 text-muted" style={{ marginRight: '5px' }}>Not A Member?</span>
                        <Link to="/register" className="card-link" id="login">Sign Up</Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="User Name"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required/>
                            <span>{userErrMsg}</span>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required/>
                            <span>{passErrMsg}
                                <br/>
                            </span>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogInScreen;
