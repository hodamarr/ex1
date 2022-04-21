
import AddChat from "./AddChat/AddChat";
import Contacts from "./contacts/Contacts";
import "./Loggedin.css";

function Loggedin(){
    return (
        <div>
          <div className="msghead">
            <img id="msgicon" src = "/pic1.png"></img> 
            Messaging
          </div>
          <hr></hr>
      <div class="container-fluid" id="chat_con">
      <div class="row">
        <div class="col-3">
        <div id='chats'>Chats <AddChat id="add"/></div>  
                <div class="d-grid">
                <button type="button" class="btn btn-outline-light btn-lg text-start"><img src = "mypic.png" class="rounded " d-block alt="..."></img> 
                  Hod <d class="fw-lighter fst-italic fs-6">12:05</d> </button>
                </div>
        </div>
    
    
    
        <div class="col-8" id="mainscreen">
          This is box for chat
        </div>
      </div>
    </div>
    
    
    
        </div>

    
   
    )
}
export default Loggedin;