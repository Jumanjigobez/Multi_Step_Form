const stepsState = {
   currentStep: 1
}

export const StepReducer = (state=stepsState, action) =>{
    switch(action.type){
        case "nextStep": {
            return {
                currentStep: state.currentStep + 1
            }
        }
        case "prevStep": {
            return {
                currentStep: state.currentStep - 1
            }
        }
        case "confirmed": {
            return {
                currentStep: 5
            }
        }
        case "changed": {
            return {
                currentStep: 2
            }
        }
        default:
            return state
    }
}