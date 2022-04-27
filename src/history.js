const chat ={time:"", self:true ,type:"", content:""};

const history = [
    {
        username:"",msgs:
        [
            {
                chatuser: "", msg:
                [
                    {
                        time:"", self:true ,type:"", content:""
                    }
                ]
            }
        ]
    }
];


export function createUsernameHistory(_username){
    if (!history.find(u => u.username === _username)){
        var obj = {
            username:_username ,msgs:[{chatuser: "", msg:[{time:"", self:true ,type:"", content:""}]}]
        }
        history.push(obj);
    }
}
