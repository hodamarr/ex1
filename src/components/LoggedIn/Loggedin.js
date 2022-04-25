import Contacts from "./contacts/Contacts";
import "./Loggedin.css";
import NavBar from "./NavBar/NavBar";
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
      <NavBar user={props.user} />
      <div className="row" line-width="100%">
        <div className="col-3" style={{height:"100vh"}} >
          <Contacts user={props.user} onSelectedChat={setChat} updatedChat={chat}/>
        </div>
        <div className="col-9" style={{ borderLeftStyle: "solid", borderWidth: "2px", borderColor: "lightGray", height:"100vh",margin:"0px" }}>
          <Chat chat={chat} addMessage={addMessage} user={props.user}/>
        </div>
      </div>
    </div>
  );
}
export default Loggedin;