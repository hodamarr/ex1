import AddChat from "./AddChat/AddChat";
import Contacts from "./contacts/Contacts";
import "./Loggedin.css";
import NavBar from "./NavBar/NavBar";
import mypic from "./mypic.png";

function Loggedin() {
  return (
    <div style={{ justifyContent: 'start' }}>
    <NavBar{...mypic }/>

      <Contacts/>


    </div>



  );
}
export default Loggedin;