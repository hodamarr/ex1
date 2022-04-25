const users = 
[
    {name: "eden1994", nick:"Eden Ben Zaken", pass:"a1234567", pic:"/users_pic/eden1994.jpeg"},
    {name: "hadadi", nick:"Sarit Hadad", pass:"a1234567", pic:"/users_pic/hadadi.jpeg"},
    {name: "um_koltom", nick:"UM-Coltom", pass:"a1234567", pic:"um_koltom.jpeg"},
    {name: "dikla15", nick:"Dikla", pass:"a1234567", pic:"/users_pic/dikla15.jpeg"},
    {name: "zehava1", nick:"Zehava Ben", pass:"a1234567", pic:"/users_pic/zehava1.jpeg"},
    {name: "offrahaz", nick:"Ofra Haza", pass:"a1234567", pic:"/users_pic/offrahaz.jpeg"}
]

/// setter.
export function add_user(_name, _nick, _pass, _pic){
    var obj = {name:"" ,nick:"", pass:"", pic:""};
    obj.name = _name;
    obj.nick = _nick;
    obj.pass = _pass;
    obj.pic = _pic;
    users.push(obj);
}


/// returns 1 if exist and password is correct.
/// return 0 if not exist.
/// return -1 if exist or password wrong.
export function is_Exist(_name, _pass){
    for(const u of users) {
        if(u.name == _name){
            if (u.pass == _pass){
                return 1;
            }
            else{
                return -1;
            }
        }
    }
    return 0;
}

///getter.
export function getPic(name){
    return users.find(u => u.name === name)?.pic || "defIcon.png";
}

///getter.
export function getNick(name){
    return users.find(u => u.name === name)?.nick;
}