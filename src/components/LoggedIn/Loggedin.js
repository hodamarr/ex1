import Contacts from "./contacts/Contacts";
import "./Loggedin.css";
import NavBar from "./NavBar/NavBar";
import mypic from "./mypic.png";
import Chat from "./Chat/Chat";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


function Loggedin(props) {
  //const location = useLocation();
  const [chat, setChat] = useState({});

  function addMessage(newMessage) {
      const newMsgs = [...chat.msgs];
      newMsgs.push(newMessage);
      setChat({...chat, msgs: newMsgs});
  }

  useEffect(() => {
    console.log('chat msg', chat.msgs)
  }, [chat])
  
  return (
    <div className="container" style={{ padding: "0px" }}>
      <NavBar{...mypic} />
      <div className="row" line-width="100%">
        <div className="col-3" >
          <Contacts user={props.user} onSelectedChat={setChat} />
        </div>
        <div className="col-9" style={{ borderLeftStyle: "solid", borderWidth: "2px", borderColor: "lightGray" }}>
          <Chat chat={chat} addMessage={addMessage}/>
        </div>
      </div>
    </div>
  );
}
export default Loggedin;