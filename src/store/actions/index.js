//Import the global types from types.js to ease catching of bugs when passed to reducers :)
import {
    NEXT_STEP,
    PREV_STEP,
    CONFIRMED,
    CHANGED,

    ADDED,
} from '../types'

export const nextStepAction = () =>{
    return{
        type: NEXT_STEP,
    }
    
}

export const prevStepAction = () =>{
    return{
        type: PREV_STEP,
    }
    
}

export const confirmAction = () =>{
    return{
        type: CONFIRMED,
    }
    
}

export const changeAction = () =>{
    return{
        type: CHANGED,
    }
    
}

export const addInfoAction = (name, email, phone) =>{
    return{
        type: ADDED,
        name: name,
        email: email,
        phone: phone
    }
}

export const addPlanTypeAction = (planType) =>{
    return{
        type: "addedPlan",
        planType: planType,

    }
}

export const addPeriodTypeAction = (periodType) =>{
    return{
        type: "addedPeriod",
        periodType: periodType,

    }
}

export const addAddOnsAction = (addonType) =>{
    return{
        type: "addedAddons",
        addonType: addonType
    }
}

export const removeAddOnsAction = (addonType) =>{
    return{
        type: "removedAddons",
        addonType: addonType
    }
}