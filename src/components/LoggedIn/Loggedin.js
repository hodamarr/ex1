import Contacts from "./contacts/Contacts";
import "./Loggedin.css";
import NavBar from "./NavBar/NavBar";
import mypic from "./mypic.png";
import Chat from "./Chat/Chat";
import { useLocation } from "react-router-dom";
import { useState } from "react";


function Loggedin() {
  const location = useLocation();
  const [chat, setChat] = useState({});
  console.log("location", location.state);
  return (
    <div className="container" style={{ padding: "0px" }}>
      <NavBar{...location.state} />
      <div className="row" line-width="100%">
        <div className="col-3" >
          <Contacts user={location.state} onSelectedChat={setChat} />
        </div>
        <div className="col-9" style={{ borderLeftStyle: "solid", borderWidth: "2px", borderColor: "lightGray" }}>
          <Chat chat={chat} />
        </div>
      </div>
    </div>
  );
}
export default Loggedin;