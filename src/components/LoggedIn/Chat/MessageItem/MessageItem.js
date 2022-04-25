import { getPic } from "../../../../users";

function MessageItem(props) {
    function ChooseMessageAlign(id){
        if(id==0){
            return "left";
        }
        else{
            return "right";
        }
    function ConnectMessages (newId, lastId){
        if(newId == lastId){
            document.getElementById("userPic").style.visibility="hidden";  
        }
    }
    }
    return (
        <span className="navbar-text" >
            <img id="userPic" src={props.self ? getPic(props.user) : props.contactpic} width="40" height="40" style={{ float: ChooseMessageAlign(props.self ? 1 : 0), margin:"10px" }} ></img>
            <div className="alert alert-primary" role="alert"  style={{ float: ChooseMessageAlign(props.self ? 1 : 0), marginLeft: "10px" }}>
                {props.content}
            </div>        
        </span>


    );
}
export default MessageItem;
