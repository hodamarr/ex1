import ContactItem from "./contactItem/ContactItem";
import { getNick, getPic, listOfSortedNames } from "../../../users";
import { useEffect, useState } from "react";


function Contacts(props) { 
    const nick = getNick(props.user);
    const [opt, setOpt] = useState("");
    const listOfName = [];
    listOfSortedNames(listOfName);
    
    for(var u of listOfName){
        for (var k of props.contacts){
            var x = k.name;

            if(x === getNick(u)){
                delete listOfName[listOfName.indexOf(u)];
            }
        }
        if(getNick(u) === getNick(props.user)) {
            delete listOfName[listOfName.indexOf(u)];
        }
    }

    function check_time(c){
            if(!c.msgs[c.msgs.length - 1]){
                return "";
            }
             return c.msgs[c.msgs.length - 1].time;
    }


        return (
            <div style={{ padding: "5px"}}>
    
                <ul className="nav flex-column" >
    
                    <span>
                        {nick}
                        <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{float:"right" }} > New + </button>
                    </span>
    
                    {(props.contacts).map((c, index) => <li key={index} className="nav-item" style={{ lineHeight: "80px", borderBottomStyle:"solid", borderWidth:"2px", borderColor:"lightGray" }} >
                     <button className=" btn-secondary" style={{width:"100%", backgroundColor:"transparent", display:"flex", borderColor:"transparent"}} onClick={() => {props.onSelectedChat(c.name);
                      
                     }}> 
                       <ContactItem 
                       {...c} 
                       time={c.msgs.length> 0 ? c.msgs[c.msgs.length-1].time : "" } 
                       
                    />
                     
                     </button>
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
                                <select className="form-select" multiple aria-label="multiple select example" onChange={(e) => {const selected = e.target.value;
                                setOpt(selected);
                                }}>
                                {(listOfName || []).map((i, index) => <option value={i}>{getNick(i)}</option>)}
                                        </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={() => {props.setter({name:getNick(opt), pic:getPic(opt), msgs:[]})} } data-bs-dismiss="modal">Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Contacts;
