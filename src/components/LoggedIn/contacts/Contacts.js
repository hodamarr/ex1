import ContactItem from "./contactItem/ContactItem";

function Contacts() {
    return (
        <div style={{ float: "left", padding: "5px", clear:"both", width:"370px" }}>

            <ul className="nav flex-column" >
                <span>
                    Hod Amar
                    <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{float:"right" }} > New + </button>
                </span>
                <li className="nav-item" style={{ lineHeight: "80px", borderBottomStyle:"solid", borderWidth:"2px", borderColor:"lightGray" }}>
                    <ContactItem{..."mypic.png"} />
                </li>
                <li className="nav-item" style={{ lineHeight: "80px", borderBottomStyle:"solid", borderWidth:"2px", borderColor:"lightGray" }}>
                    <ContactItem{..."mypic.png"} />
                </li>
                <li className="nav-item" style={{ lineHeight: "80px", borderBottomStyle:"solid", borderWidth:"2px", borderColor:"lightGray" }}>
                    <ContactItem{..."mypic.png"} />
                </li>
                <li className="nav-item" style={{ lineHeight: "80px", borderBottomStyle:"solid", borderWidth:"2px", borderColor:"lightGray" }}>
                    <ContactItem{..."mypic.png"} />
                </li>
                <li className="nav-item" style={{ lineHeight: "80px", borderBottomStyle:"solid", borderWidth:"2px", borderColor:"lightGray" }}>
                    <ContactItem{..."mypic.png"} />
                </li>

            </ul>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Chat</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="recipient-name" placeholder='Enter Name' ></input>
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
        </div>

    );
}


export default Contacts;
