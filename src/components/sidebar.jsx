import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () =>{
    const currentStep = useSelector( state => state.StepReducer.currentStep );

    
    return(
        <>
            <div id="sidebar">
                <ul id="steps">
                    <li>
                    <span className={`num ${currentStep === 1 && "active"}`}>1</span>

                    <div>
                        <p>Step 1</p>
                        <h2>Your info</h2>
                    </div>
                    </li>

                    <li>
                    <span className={`num ${currentStep === 2 && "active"}`}>2</span>

                    <div>
                        <p>Step 2</p>
                        <h2>Select plan</h2>
                    </div>
                    </li>

                    <li>
                    <span className={`num ${currentStep === 3 && "active"}`}>3</span>

                    <div>
                        <p>Step 3</p>
                        <h2>Add-ons</h2>
                    </div>
                    </li>

                    <li>
                    <span className={`num ${currentStep === 4 || currentStep === 5 ? "active" : ""}`}>4</span>

                    <div>
                        <p>Step 4</p>
                        <h2>Summary</h2>
                    </div>

                   
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;