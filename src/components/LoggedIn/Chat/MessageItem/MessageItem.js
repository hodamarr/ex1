function MessageItem() {
    function ChooseMessageAlign(id){
        if(id==0){
            //
            return "left";
        }
        else{
            return "right";
        }
    function ConnectMessages(newId, lastId){
        if(newId == lastId){
            document.getElementById("userPic").style.visibility="hidden";  
        }
    }
    }
    return (
        <span className="navbar-text" onload='ConnectMessages(1,1)'>
            <img id="userPic" src="C:/Users/ofeka/</span>Downloads/09d873c9-d97c-49ab-813d-d989adf45982.jpg" width="40" height="40" style={{ float: ChooseMessageAlign(1), margin:"10px" }} ></img>
            <div className="alert alert-primary" role="alert"  style={{ float: ChooseMessageAlign(1), marginLeft: "10px" }}>
                first message
            </div>        
        </span>


    );
}
export default MessageItem;
