const usersInfoState = {
        name: "",
        email: "",
        phone: ""
}

export const usersInfoReducer = (usersInfo=usersInfoState, action) =>{
    switch(action.type){
        case "added": {
            return {
                name: action.name,
                email: action.email,
                phone: action.phone
            }
        }
        default: 
            return usersInfo
    }
}

