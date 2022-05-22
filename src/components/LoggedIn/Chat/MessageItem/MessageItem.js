import { getPic } from "../../../../users";

function getContent(type, content) {
    switch (type) {
        case "video":
            return (
                <video style={{width:300, height:200}} controls>
                    <source src={content} type="video/mp4"></source>
                </video>
            );
        case "image":
            return <img src={content} style={{width:150, height:150}} alt=""/>;
        case "audio":
            return (
                <audio controls>
                    <source src={content} type="audio/mp3"></source>
                </audio>
            );
        case "txt":
        default:
            return content;
    }
}

function MessageItem(props) {
    function ChooseMessageAlign(id){
        if(id === 0) {
            return "left";
        }
        else {
            return "right";
        }
    }
    function ConnectMessages (newId, lastId) {
        if(newId === lastId) {
            document.getElementById("userPic").style.visibility="hidden";  
        }
    }
    return (
        <span className="navbar-text" onLoad={ConnectMessages(props.content)}>
            <img id="userPic" src={props.self ? getPic(props.user) : props.contactpic} width="40" height="40"
                 style={{ float: ChooseMessageAlign(props.self ? 1 : 0), margin:"10px" }} alt=""/>
            <div className="alert alert-primary" role="alert" style={{ float: ChooseMessageAlign(props.self ? 1 : 0), marginLeft: "10px" }}>
                {getContent(props.type,props.content)}
            </div>
        </span>
    );
}

export default MessageItem;
