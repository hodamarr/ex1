
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function ContactItem(pic){
    return(
        <div  >
        <span className="navbar-text">
                    <img src={pic} width="40" height="40" ></img>
                    <a aria-current="page" style={{padding:"10px"}}>Active</a>
                    <a style={{float:"right", color:"gray"}}>22:02</a>
                    </span>
        </div>
    );
}
export default ContactItem;
