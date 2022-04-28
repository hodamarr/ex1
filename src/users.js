const users = 
[
    {name: "eden_1994", nick:"Eden Ben Zaken", pass:"a1234567", pic:"userphoto/eden1994.jpeg"},
    {name: "hadadi", nick:"Sarit Hadad", pass:"a1234567", pic:"userphoto/hadadi.jpeg"},
    {name: "umkoltom", nick:"UM-COLTOM", pass:"a1234567", pic:"userphoto/um_koltom.jpeg"},
    {name: "dikla15", nick:"Dikla", pass:"a1234567", pic:"userphoto/dikla15.jpeg"},
    {name: "Zahava1415", nick:"Zehava Ben", pass:"a1234567", pic:"userphoto/zehava1.png"}
]

export function listOfSortedNames(){
    var arr = [];
    for(const u of users){
        arr.push(u.name);
    }
    return arr.sort(); 
}

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

export function isNameExist(_name){
   if( users.find(u => u.name == _name)){return 1;}
   return 0;
}

export function getNick(name){
    return users.find( u => u.name === name)?.nick;
}

export function getPic(name){
    return users.find(u => u.name === name)?.pic || "defIcon.png";
}

export function getName(nick){
    return users.find(u => u.nick === nick)?.name;
}