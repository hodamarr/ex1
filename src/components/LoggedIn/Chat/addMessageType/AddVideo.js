import { useState, useRef } from "react";

function AddVideo(props) {
    const [videoInChat, SetVideoInChat] = useState();
    const userRef = useRef();

    function videoMessage(videoInChat) {

    }
    return (
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
                                <input className="form-control"  type="file" id="videoFile" accept="video/*" ref={userRef}
                                    onChange={(e) => { SetVideoInChat(URL.createObjectURL(e.target.files[0])); }}
                                ></input>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={() => props.addNewVid(videoInChat)}data-bs-dismiss="modal">Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddVideo;
