import MessageItem from "./MessageItem/MessageItem";
import "./Chat.css"
import { useState, useRef } from "react";
import AddImage from "./addMessageType/AddImage";
import AddVideo from "./addMessageType/AddVideo";
import AddRecord from "./addMessageType/AddRecord";

function Chat(props) {
const [pictureInChat, SetPictureInChat] = useState();
const userRef = useRef();

    function imageMessage(pictureInChat) {

    }
    return (

        <div className="container" style={{ padding: "0px", margin: "20px" }}>

            {/*messages history*/}
            <h4> Hod Amar</h4>
            <ul className="nav flex-column">
                {(props.chat.msgs || []).map(m => <li className="nav-item" style={{ lineHeight: "20px" }}>
                    <MessageItem {...m} contactpic = {props.chat.pic}/>
                </li>)}
            </ul>

            {/*writing panel*/}
            <nav className="navbar fixed-bottom navbar-light bg-light" style={{ width: "1115px", left: "380px" }}>
                <div className="container-fluid">
                    <form className="row g-3" >
                        <div className="col-auto">
                            <input type="text" className="form-control" id="inputMessage" placeholder="Write Here..." style={{ width: "930px" }}></input>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Send</button>
                        </div>
                        <div className="col-auto">
                            <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                </svg>
                            </a>
                        </div>
                    </form>
                </div>
            </nav>


            {/*attach menu*/}
            <div className="collapse" id="collapseExample" style={{ position: "fixed", bottom: "89px", right: "45px" }}>
                <div className="row g-3" style={{ backgroundColor: "#0d6efd", width: "180px", borderRadius: "20px", height: "40px" }}>
                    <div className="col-auto" style={{ marginTop: "0px" }}>
                        <button className="btn btn-secondery sm" data-bs-toggle="modal" data-bs-target="#ImagePick" style={{
                            display: "block"
                            , marginLeft: "auto"
                            , marginRight: "auto"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                                <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="col-auto" style={{ marginTop: "0px" }}>
                        <button className="btn btn-secondery sm" data-bs-toggle="modal" data-bs-target="#VideoPick" style={{display: "block", marginLeft: "auto", marginRight: "auto"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                            </svg>
                        </button>
                    </div>
                    <div className="col-auto" data-bs-toggle="modal" data-bs-target="#RecordPick" style={{ marginTop: "0px" }}>
                        <button className="btn btn-secondery sm" style={{display: "block", marginLeft: "auto", marginRight: "auto"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />                                </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/*attacments pop-ups*/}
            <AddImage id="ImagePick"></AddImage>
            <AddVideo id="VideoPick"></AddVideo>
            <AddRecord id="RecordPick"></AddRecord>
        </div>
    );
}
export default Chat;
