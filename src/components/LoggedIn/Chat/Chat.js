import MessageItem from "./MessageItem/MessageItem";
import "./Chat.css"
import { useState, useRef, useEffect } from "react";
import AddImage from "./addMessageType/AddImage";
import AddVideo from "./addMessageType/AddVideo";
import AddRecord from "./addMessageType/AddRecord";

function Chat(props) {
    const [pictureInChat, SetPictureInChat] = useState();
    const [showMenu, setShowMenu] = useState(false);
    const userRef = useRef();
    var currentTimeDate = new Date();
    const [msg, setMsg] = useState('');


    // function scrollToBottom (id) {
    //     console.log("name", id);
    //     var div = document.getElementById(id);
    //     div.scrollTop = div.scrollHeight - div.clientHeight;
    //  }

    return (
        <div className="container" style={{ display: "flex", padding: "0px", marginTop: "20px", height: "100%" }}>
            <div className="col" >

            {/*messages history*/}
                <div className="row" id="scrollable"  style={{ display: "flex", alignSelf: "flex-start", height: "80%", overflowY: "scroll" }} >
                    <h4> {props.chat.name}</h4>
                    <ul className="nav flex-column">
                        {(props.chat.msgs || []).map((m, index) => <li key={index} className="nav-item" style={{ lineHeight: "20px" }}>
                            <MessageItem {...m} contactpic={props.chat.pic} user={props.user}/>
                        </li>)}
                    </ul>
                </div>
                
                {/*writing panel*/}
                <div className="row" style={{ display: "flex", alignSelf: "flex-end" }} >
                    <nav className="navbar navbar-light bg-light" style={{width:"73vw", paddingRight:0}}>
                        <div className="container-fluid">
                            <div className="row g-3">
                                <div className="col-auto">
                                    <input placeholder="Write Here..." style={{ width: "60vw" }} value={msg} onChange={e => setMsg(e.target.value)}></input>
                                </div>
                                <div className="col-auto">
                                    <button type="button" onClick={() => {
                                        const newMessage = {chatuser:props.chat.name, content: msg, time: currentTimeDate.getHours().toString() + ":" + currentTimeDate.getMinutes().toString(), self: true, type: 'txt' };
                                        props.addMessage(newMessage);
                                        setMsg('');
                                    }} className="btn btn-primary mb-3">Send</button>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary" onClick={() => setShowMenu(!showMenu)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
             </div>

            {/*attach menu*/ }
    {showMenu && <div style={{ position: "fixed", bottom: "89px", right: "45px" }}>
        <div className="row g-3" style={{ backgroundColor: "#0d6efd", width: "180px", borderRadius: "20px", height: "40px" }}>
            <div className="col-auto" style={{ marginTop: "0px" }}>
                <button className="btn btn-secondery sm" id="imagePicker" data-bs-toggle="modal" data-bs-target="#ImagePick" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} onClick={() => setShowMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                    </svg>
                </button>
            </div>
            <div className="col-auto" style={{ marginTop: "0px" }}>
                <button className="btn btn-secondery sm" data-bs-toggle="modal" data-bs-target="#VideoPick" style={{
                    display: "block", marginLeft: "auto", marginRight: "auto"
                }} onClick={() => setShowMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                    </svg>
                </button>
            </div>
            <div className="col-auto" data-bs-toggle="modal" data-bs-target="#RecordPick" style={{ marginTop: "0px" }}>
                <button className="btn btn-secondery sm" style={{
                    display: "block", marginLeft: "auto", marginRight: "auto"
                }} onClick={() => setShowMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />                                </svg>
                </button>
            </div>
        </div>
    </div>}

    {/*attacments pop-ups*/ }
            <AddImage id="ImagePick" addNewPic={pic => {
                const newMessage = { content: pic, time: "22-22", self: true, type: 'image' };
                props.addMessage(newMessage);
                setMsg('');
            }}></AddImage>
            <AddVideo id="VideoPick" addNewVid={video => {
                const newMessage = { content: video, time: "22-22", self: true, type: 'video' };
                props.addMessage(newMessage);
                setMsg('');
            }}></AddVideo>
            <AddRecord id="RecordPick"addNewRec={rec => {
                const newMessage = { content: rec, time: "22-22", self: true, type: 'audio' };
                props.addMessage(newMessage);
                setMsg('');
            }}></AddRecord>
        </div >
    );
}
export default Chat;
