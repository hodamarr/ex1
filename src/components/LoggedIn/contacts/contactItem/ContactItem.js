function ContactItem(props){

    return (
        <div>
            <span className="navbar-text">
                <img src={props.pic} width="40" height="40" alt=""/>
                <span style={{padding:"10px"}}>{props.name}</span>
                <span style={{float:"right", color:"gray"}}>{props.time}</span>
            </span>
        </div>
    );
}

export default ContactItem;
