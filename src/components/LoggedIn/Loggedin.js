import Contacts from "./contacts/Contacts";
import "./Loggedin.css";
import NavBar from "./NavBar/NavBar";
import mypic from "./mypic.png";
import Chat from "./Chat/Chat";

function Loggedin() {
  return (
    <div class="container" style={{padding:"0px"}}>
      <NavBar{...mypic} />
      <div class="row" line-width="100%">
        <div class="col-3" >
          <Contacts />
        </div>
        <div class="col-9" style={{borderLeftStyle:"solid", borderWidth:"2px", borderColor:"lightGray" }}>
          <Chat />
        </div>
      </div>
    </div>
  );
}
export default Loggedin;