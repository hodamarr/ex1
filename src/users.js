const users = 
[
    {name: "Eden_1994", nick:"Eden Ben Zaken", pass:"a1234567", pic:"defIcon.png"},
    {name: "hadadi", nick:"Sarit Hadad", pass:"a1234567", pic:"defIcon.png"},
    {name: "um_koltom", nick:"UM-COLTOM", pass:"a1234567", pic:"defIcon.png"},
    {name: "dik_la15", nick:"Dikla", pass:"a1234567", pic:"defIcon.png"},
    {name: "Zahava1415", nick:"Zehava Ben", pass:"a1234567", pic:"defIcon.png"}
]


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
