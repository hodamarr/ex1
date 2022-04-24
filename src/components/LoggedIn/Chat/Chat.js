import MessageItem from "./MessageItem/MessageItem";
import "./Chat.css"
import * as React from "react";
import useRecorder from "./useRecorder";
import { useState, useRef } from "react";

function Chat(props) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
const [pictureInChat, SetPictureInChat] = useState();
const userRef = useRef();

    function imageMessage(pictureInChat) {

    }
    return (

        <div className="container" style={{ paddin: "0px", margin: "20px" }}>
            <h4> Hod Amar</h4>
            <ul className="nav flex-column">
                {(props.chat.msgs || []).map(m => <li className="nav-item" style={{ lineHeight: "20px" }}>
                    <MessageItem {...m} contactpic = {props.chat.pic}/>
                </li>)}
            </ul>

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
                        <button className="btn btn-secondery sm" data-bs-toggle="modal" data-bs-target="#VideoPick" style={{
                            display: "block"
                            , marginLeft: "auto"
                            , marginRight: "auto"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                            </svg>
                        </button>
                    </div>
                    <div className="col-auto" data-bs-toggle="modal" data-bs-target="#RecordPick" style={{ marginTop: "0px" }}>
                        <button className="btn btn-secondery sm" style={{
                            display: "block"
                            , marginLeft: "auto"
                            , marginRight: "auto"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />                                </svg>
                        </button>
                    </div>


                </div>
            </div>

            <div className="modal fade" id="ImagePick" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Uploade Image</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input className="form-control" accept="image/*" for=".png" type="file" id="imageFile" ref={userRef}
                                    onChange={(e) => {SetPictureInChat(URL.createObjectURL(e.target.files[0]));}} 
                                    ></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">Done</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="VideoPick" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Uploade Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input className="form-control" type="file" id="videoFile" accept="video/*"></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                            <button type="button" className="btn btn-primary">Done</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="RecordPick" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Record Message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-3">
                                <div className="col-auto">
                                    <audio src={audioURL} controls />
                                </div>
                                <div className="col-auto">

                                    <button className="btn btn-primary sm" onClick={startRecording} disabled={isRecording} style={{ margin: "2px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-paperclip" viewBox="0 0 16 16">
                                            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />                                </svg>
                                    </button>
                                </div>
                                <div className="col-auto">

                                    <button className="btn btn-primary sm" onClick={stopRecording} disabled={!isRecording} style={{ margin: "2px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                            <button type="button" className="btn btn-primary">Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Chat;
