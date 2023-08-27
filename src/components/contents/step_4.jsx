import React, { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { confirmAction, prevStepAction, changeAction } from '../../store/actions';
import { useMemo } from 'react';

const Step_4 = () =>{
    const dispatch = useDispatch();

    const state = useSelector(state => state);
    const usersPlanReducer = state.usersPlanReducer;//access the plans chosed
    const usersAddonReducer = state.usersAddonReducer;

    const [planTotal, setplanTotal] = useState(0);
    const [addonTotal, setaddonTotal] = useState(0);
    const [Total, setTotal] = useState(0);

    const handleConfirm = () =>{
        dispatch(confirmAction())
    }
    const handlePrevStep = () =>{
        dispatch(prevStepAction())
    }
    const handleChange = () =>{
        dispatch(changeAction())
    }

    //All fees that will be used for calculations
    let arcade_fee = usersPlanReducer.periodType === "monthly" ? 9 : 90,
        advance_fee = usersPlanReducer.periodType === "monthly" ? 12 : 120,
        pro_fee = usersPlanReducer.periodType === "monthly" ? 15 : 150,
        
        online_serviceFee = usersPlanReducer.periodType==="monthly" ? 1 : 10,
        larger_storageFee = usersPlanReducer.periodType==="monthly" ? 2 : 20,
        customizable_profileFee = usersPlanReducer.periodType==="monthly" ? 2 : 20;
    
    const planFees = [arcade_fee, advance_fee, pro_fee]

    const addonFees = [ online_serviceFee, larger_storageFee, customizable_profileFee]

    useEffect(()=>{
        //Update the state of the totals acccording to chosen options
        
        if(usersPlanReducer.planType === "arcade"){
            setplanTotal(planFees[0])
        }else if(usersPlanReducer.planType === "advanced"){
            setplanTotal(planFees[1])
        }else{
            setplanTotal(planFees[2])
        }

        for(let i=0; i<usersAddonReducer.length; i++){
            if(usersAddonReducer[i].addOn === "Online Service"){
                setaddonTotal((prevTotal)=>prevTotal+addonFees[0])
            }else if(usersAddonReducer[i].addOn === "Larger Storage"){
                setaddonTotal((prevTotal)=>prevTotal+addonFees[1])
            }else if(usersAddonReducer[i].addOn === "Customizable Profile"){
                setaddonTotal((prevTotal)=>prevTotal+addonFees[2])
            }
        }

        
       
    },[])

    useMemo(()=>{
        //calculate the totals and update the Total state
        setTotal(planTotal + addonTotal)
    },[planTotal, addonTotal])

    // console.log("Plans Total: ", planTotal)
    // console.log("Addons Total: ", addonTotal)
    // console.log("Total: ", Total)
    
    return(
        <>
            <section id="step_4">
                <div className="part_1">
                    <h1>Finishing up</h1>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>

                <div className="part_2">
                    <div className="b1">
                        <div className="part_1">
                            <h3 className="billing">{usersPlanReducer.planType} ({usersPlanReducer.periodType})</h3>
                            <p onClick={handleChange}>Change</p>
                        </div>

                        <div className="part_2">
                            <p className="price">
                                <span>
                                    
                                    {//A large ternary operators checking the planType and PeriodType 😎🐒
                                    usersPlanReducer.planType === "arcade" ? usersPlanReducer.periodType === "monthly" ?
                                    "$9/mo" : "$90/yr" 
                                    : 
                                    usersPlanReducer.planType === "advanced" ? usersPlanReducer.periodType === "monthly" ?
                                    "$12/mo" : "$120/yr" 
                                    :
                                    usersPlanReducer.planType === "pro" ? usersPlanReducer.periodType === "monthly" ?
                                    "$15/mo" : "$150/yr" 
                                    : 
                                    ""
                                    }
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="b2">
                        {//Map the addons array in a div
                            usersAddonReducer.map((elem,index)=>{
                                return(
                                    <div key={index}>
                                        <div className="part_1">
                                            <h3 className="addon_title">{elem.addOn}</h3>
                                        </div>
            
                                        <div className="part_2">
                                            <p className="addon_price">
                                                <span>
                                                    {
                                                        //ternary operators checking the addonType and PeriodType 😎🐒
                                                        elem.addOn === "Online Service" ? usersPlanReducer.periodType === "monthly" ?
                                                        "+$1/mo" : "+$10/yr" 
                                                        : 
                                                        elem.addOn === "Larger Storage" ? usersPlanReducer.periodType === "monthly" ?
                                                        "+$2/mo" : "+$20/yr" 
                                                        :
                                                        elem.addOn === "Customizable Profile" ? usersPlanReducer.periodType === "monthly" ?
                                                        "+$2/mo" : "+$20/yr" 
                                                        : 
                                                        ""
                                
                                                    }
                                                   
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                </div>

                <div className="part_3">
                    <div className="part_1">
                        <p className="total_type">Total ({usersPlanReducer.periodType === "monthly" ? "per month" : "per year"})</p>
                    </div>

                    <div className="part_2">
                        <p className="total_price">{usersPlanReducer.periodType === "monthly" ? `+$${Total}/mo` : `$${Total}/yr`}</p>
                    </div>
                </div>

                <div className="part_4">
                    <div className="btn_1">
                        <p onClick={handlePrevStep}>Go Back</p>
                    </div>

                    <div className="btn_2">
                        <button className="btn" onClick={handleConfirm}>Confirm</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Step_4;