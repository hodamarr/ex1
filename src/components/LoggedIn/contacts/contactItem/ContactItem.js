
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function ContactItem(props) {
    return (
        <div  >
            <span className="navbar-text">
                <img src={props.pic} width="40" height="40" ></img>
                <a aria-current="page" style={{ padding: "10px" }}>{props.name}</a>
                <a style={{ float: "right", color: "gray" }}>{props.time}</a>
            </span>
        </div>
    );
}
export default ContactItem;
