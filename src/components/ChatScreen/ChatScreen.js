import Contacts from "../LoggedIn/contacts/Contacts";
import AddChat from "../LoggedIn/AddChat/AddChat";
function ChatScreen(){
    return(
        <div>
            <AddChat/>
            <Contacts/>
        </div>
    );
}
export default ChatScreen;
