import Contacts from "./contacts/Contacts";
import "./Loggedin.css";
import NavBar from "./NavBar/NavBar";
import mypic from "./mypic.png";
import Chat from "./Chat/Chat";

function Loggedin() {
  return (
    <div style={{ justifyContent: 'start' }}>
    <NavBar{...mypic }/>
    <Contacts/>
    <Chat/>

    </div>



  );
}
export default Loggedin;