const addOnState = [];

export const usersAddonReducer = (addOns=addOnState, action) =>{
    switch(action.type){
        case "addedAddons": {
            return [...addOns, {
                addOn: action.addonType
            }];
                
            
        }
        case "removedAddons": {
            const newArray = addOns.filter((i)=> i.addOn!==action.addonType)
            return newArray
            
        }
        default:
            return addOns
        
    }
}