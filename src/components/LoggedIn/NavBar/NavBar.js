import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function NavBar(img) {
    return (
        <div  style={{width:'100%'}}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{color: "white"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="#0d6efd"
                    className="bi bi-chat-right-dots-fill" viewBox="0 0 16 16" >
                    <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                  </svg>
                            Messaging
                    </a>
                    <span className="navbar-text" >
                    <img src={img} width="25" height="25" ></img>
                    Hod Amar
                    <Link to="/LogIn" className="card-link" id="logOut" style={{padding:'5px'}}>Log Out</Link>
                    </span>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;
