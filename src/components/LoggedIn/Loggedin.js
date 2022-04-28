import Contacts from "./contacts/Contacts";
import "./Loggedin.css";
import NavBar from "./NavBar/NavBar";
import Chat from "./Chat/Chat";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNick, getName } from "../../users";
import { addMsgHistory } from "../../history";

// load the conversetions of current logged user
const func = async (props) => {
  const response = await fetch("chat_history/"+props.user+".json", {
      headers:
      {
          "Content-Type":"application/json",
          Accept:"application/json"
      }
  });
  
  const data = await response.json();
  return data.contacts;
}

function Loggedin(props) {



  //const location = useLocation();
  const [chat, setChat] = useState(''); // contains the contact name
  const [contacts, setContacts] = useState([]);
  const [selectedChat, setSelectedChat] = useState({}); // selected chat to display


  useEffect(() => {
    const f = async () => {
      const response = await func(props);
      setContacts(response);

    }

    if (props.user) {
      f();
    }
  }, [props.user]);

  function addMessage(newMessage) {
      const chatIndex = contacts.findIndex(c => c.name === chat);
      let updatedMsgs = [];
      if (chatIndex !== -1) {
        updatedMsgs = [...contacts[chatIndex].msgs];
        updatedMsgs.push(newMessage);
      }
      const updatedContacts = [ ...contacts ];
      updatedContacts[chatIndex].msgs = updatedMsgs;

      setContacts(updatedContacts);
  }

  useEffect(() => {
    setSelectedChat(contacts.find(c => c.name === chat));
  }, [chat])

  
  return (
    <div className="container" style={{ padding: "0px" }}>
      <NavBar user={props.user} />
      <div className="row" line-width="100%">
        <div className="col-3" style={{height:"100vh"}} >
          <Contacts user={props.user} onSelectedChat={setChat} contacts={contacts} setter={u => contacts.push(u)}
          />
        </div>
        <div className="col-9" style={{ borderLeftStyle: "solid", borderWidth: "2px", borderColor: "lightGray", height:"100vh",margin:"0px" }}>
          { props.user && selectedChat && selectedChat.name && <Chat chat={selectedChat} addMessage={addMessage} user={props.user}/>}
        </div>
      </div>
    </div>
  );
}
export default Loggedin;