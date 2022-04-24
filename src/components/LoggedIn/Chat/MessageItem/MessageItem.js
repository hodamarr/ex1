function MessageItem() {
    function ChooseMessageAlign(id){
        if(id==0){
            //
            return "left";
        }
        else{
            return "right";
        }
    const ConnectMessages = function (newId, lastId){
        if(newId == lastId){
            document.getElementById("userPic").style.visibility="hidden";  
        }
    }
    }
    return (
        <span className="navbar-text" onLoad={ConnectMessages(1,1)}>
            <img id="userPic" src="mypic.png" width="40" height="40" style={{ float: ChooseMessageAlign(1), margin:"10px" }} ></img>
            <div className="alert alert-primary" role="alert"  style={{ float: ChooseMessageAlign(1), marginLeft: "10px" }}>
                first message
            </div>        
        </span>


    );
}
export default MessageItem;
