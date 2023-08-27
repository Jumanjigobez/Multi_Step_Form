const usersPlanState = {
    planType: "arcade",
    periodType: "monthly",
}

export const usersPlanReducer = (usersPlan=usersPlanState, action) =>{
    switch(action.type){
        case "addedPlan": {
            return {
                planType: action.planType,
                periodType: usersPlan.periodType,
            }
        }
        case "addedPeriod": {
            return {
                planType: usersPlan.planType,
                periodType: action.periodType,
            }
        }
        default: 
            return usersPlan
    }
}