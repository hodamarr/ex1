import ContactItem from "./contactItem/ContactItem";
import connected_user from "../../../common";
import { useEffect, useState } from "react";

const func = async (props) => {
    const response = await fetch("chat_history/"+props.user+".json", {
        headers:
        {
            "Content-Type":"application/json",
            Accept:"application/json"
        }
    });
    
    const data = await response.json();
    return data.contacts;
    }

function Contacts(props) { 
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
    const f = async () => {
        const response = await func(props);
        setContacts(response);
    
    }
    
        if (props.user){
            f();
        }
    },[props.user]);
    
        return (
            <div style={{ float: "left", padding: "5px", clear:"both", width:"370px" }}>
    
                <ul className="nav flex-column" >
    
                    <span>
                        Hod Amar
                        <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{float:"right" }} > New + </button>
                    </span>
    
                    {(contacts || []).map(c => <li className="nav-item" style={{ lineHeight: "80px", borderBottomStyle:"solid", borderWidth:"2px", borderColor:"lightGray" }} >
                     <button onClick={() => props.onSelectedChat(c)}> 
                       <ContactItem{...c} userpic = {props.user} /></button>
                    </li>
                    )}
    
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
