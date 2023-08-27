import React from "react";
import { useSelector } from "react-redux";

const PhoneSidebar = () =>{
    const currentStep = useSelector( state => state.StepReducer.currentStep );

    
    return(
        <>
            <div id="phone_sidebar">
                <ul id="steps">
                    <li>
                        <span className={`num ${currentStep === 1 && "active"}`}>1</span>
                    </li>

                    <li>
                        <span className={`num ${currentStep === 2 && "active"}`}>2</span>

                    </li>

                    <li>
                        <span className={`num ${currentStep === 3 && "active"}`}>3</span>
                    </li>

                    <li>
                        <span className={`num ${currentStep === 4 || currentStep === 5 ? "active" : ""}`}>4</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PhoneSidebar;