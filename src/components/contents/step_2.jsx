import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nextStepAction, prevStepAction, addPlanTypeAction, addPeriodTypeAction } from '../../store/actions';

const Step_2 = () =>{
    const dispatch = useDispatch();

    const state = useSelector(state => state)
    const usersPlanReducer = state.usersPlanReducer;//Taking the users plan be as default values when returning back
   
    var planType = usersPlanReducer.planType;
    var periodType = usersPlanReducer.periodType;

    const handlePlanType = (x) =>{

        planType = x;
        dispatch(addPlanTypeAction(planType))
    }
    
    const handlePeriodType = (e) =>{
        
        periodType = periodType === "monthly" ? "yearly" : "monthly";
        dispatch(addPeriodTypeAction(periodType));

        let text_monthly = e.target.parentNode.querySelector("p.text_monthly")
        let text_yearly = e.target.parentNode.querySelector("p.text_yearly")

        if(e.target.checked){
            text_yearly.style.color = "var(--Marine-blue)";
            text_monthly.style.color = "var(--Cool-gray)";
        }else{
            text_yearly.style.color = "var(--Cool-gray)";
            text_monthly.style.color = "var(--Marine-blue)";

        }
    }

    const handleNextStep = () =>{
        dispatch(nextStepAction())
    }
    const handlePrevStep = () =>{
        dispatch(prevStepAction())
    }

    useEffect(()=>{
        //Setting the active classes for the clicked box after renders complete
        let box = document.querySelectorAll(".box");

        if(planType === 'pro'){
            box[0].classList.remove("active");
            box[1].classList.remove("active");
            box[2].classList.add("active");

        }
        else if(planType === 'advanced'){
            box[0].classList.remove("active");
            box[1].classList.add("active");
            box[2].classList.remove("active");

        }
        else{//default
            box[0].classList.add("active");
            box[1].classList.remove("active");
            box[2].classList.remove("active");
            
        }

        //The offer when periodType is yearly
        let offer_elem = document.querySelectorAll(".offer");

        offer_elem.forEach((e)=>{
            e.innerText = periodType === "yearly" ? "2 months free" : "";
        })

        //The active color for either monthly or yearly text
        let checkbox = document.querySelector(".period_checkbox"),
            text_monthly = document.querySelector("p.text_monthly"),
            text_yearly = document.querySelector("p.text_yearly");

        if(checkbox.checked){
            text_yearly.style.color = "var(--Marine-blue)";
            text_monthly.style.color = "var(--Cool-gray)";
        }else{
            text_yearly.style.color = "var(--Cool-gray)";
            text_monthly.style.color = "var(--Marine-blue)";

        }

    })
    
    //The fees
    let arcade_fee = periodType === "monthly" ? "$9/mo" : "$90/yr",
        advance_fee = periodType === "monthly" ? "$12/mo" : "$120/yr",
        pro_fee = periodType === "monthly" ? "$15/mo" : "$150/yr";
        

    return(
        <>
            <section id="step_2">
                <div className="part_1">
                    <h1>Select your plan</h1>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>

                <div className="part_2">
                    <div className="box" onClick={() => handlePlanType("arcade")}>
                        <div className="icon_part">
                            <img src="/Multi_Step_Form/assets/images/icon-arcade.svg" alt="arcade icon"/>
                        </div>

                        <div className="text_part">
                            <h3>Arcade</h3>
                            <p className="fee">{arcade_fee}</p>
                            <p className="offer"></p>
                        </div>
                    </div>

                    <div className="box" onClick={() => handlePlanType("advanced")}>
                        <div className="icon_part">
                            <img src="/Multi_Step_Form/assets/images/icon-advanced.svg" alt="advanced icon"/>
                        </div>

                        <div className="text_part">
                            <h3>Advanced</h3>
                            <p className="fee">{advance_fee}</p>
                            <p className="offer"></p>
                        </div>
                    </div>

                    <div className="box" onClick={() => handlePlanType("pro")}>
                        <div className="icon_part">
                            <img src="/Multi_Step_Form/assets/images/icon-pro.svg" alt="pro icon"/>
                        </div>

                        <div className="text_part">
                            <h3>Pro</h3>
                            <p className="fee">{pro_fee}</p>
                            <p className="offer"></p>
                        </div>
                    </div>
                </div>

                <div className="part_3"> 
                    <p className='text_monthly'>Monthly</p>
                    <input type="checkbox" className="period_checkbox" defaultChecked={periodType==="yearly"?true:false} onClick={(e) => {handlePeriodType(e)}}/>
                    <p className='text_yearly'>Yearly</p>
                </div>

                <div className="part_4">
                    <div className="btn_1">
                    <p onClick={handlePrevStep}>Go Back</p>
                    </div>

                    <div className="btn_2">
                    <button className="btn" onClick={handleNextStep}>Next Step</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Step_2;
