import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nextStepAction, prevStepAction, addAddOnsAction, removeAddOnsAction } from '../../store/actions';

const Step_3 = () =>{
    const dispatch = useDispatch();

    const state = useSelector(state => state);
    const usersAddonReducer = state.usersAddonReducer;
    const usersPeriodType = state.usersPlanReducer.periodType;//Get the periodType the user chosed if monthly/yearly

    const box_1 = useRef();//Creating a ref that will ease in giving the div boxes and checkboxes a class of active when clicked
    const check_1 = useRef();
    const box_2 = useRef();
    const check_2 = useRef();
    const box_3 = useRef();
    const check_3 = useRef();


    const handleNextStep = () =>{
        dispatch(nextStepAction())
    }
    const handlePrevStep = () =>{
        dispatch(prevStepAction())
    }

    const handleAddAddOns = (x, box)=>{
        let addonType = x;
        if(usersAddonReducer.length === 0){//if the addons list is empty insert the clicked addon
            dispatch(addAddOnsAction(addonType));
            if(box===1){
                box_1.current.classList.add("active")
                check_1.current.classList.add("active")
            }else if(box===2){
                box_2.current.classList.add("active")
                check_2.current.classList.add("active")
            }else if(box===3){
                box_3.current.classList.add("active")
                check_3.current.classList.add("active")
            }
        }else{
            let included = false;

            let addOnList = usersAddonReducer.map((elem)=> elem);//Get the lists of addons selected

            addOnList.forEach(elem => {
                if(addonType === elem.addOn){//Confirm if addon selected is already included in the list
                    included = true
                }
            });

            if(!included){//If not included then dispatch to be included
                dispatch(addAddOnsAction(addonType));
                if(box===1){
                    box_1.current.classList.add("active")
                    check_1.current.classList.add("active")
                }else if(box===2){
                    box_2.current.classList.add("active")
                    check_2.current.classList.add("active")
                }else if(box===3){
                    box_3.current.classList.add("active")
                    check_3.current.classList.add("active")
                }
            }else{
                handleRemoveAddOns(addonType);
                if(box===1){
                    box_1.current.classList.remove("active")
                    check_1.current.classList.remove("active")
                }else if(box===2){
                    box_2.current.classList.remove("active")
                    check_2.current.classList.remove("active")
                }else if(box===3){
                    box_3.current.classList.remove("active")
                    check_3.current.classList.remove("active")
                }
            }
        }
        
    }
    
    const handleRemoveAddOns = (x)=>{
        let addonType = x;
        dispatch(removeAddOnsAction(addonType))
    }
    
    useEffect(()=>{
        //Setting the active classes for the clicked addons after renders complete
        let addOnList = usersAddonReducer.map((elem)=> elem);//Get the lists of addons selected

        addOnList.forEach(elem => {
            if(elem.addOn === "Online Service"){
                box_1.current.classList.add("active");
                check_1.current.classList.add("active");

            }else if(elem.addOn === "Larger Storage"){
                box_2.current.classList.add("active");
                check_2.current.classList.add("active");

            }else if(elem.addOn === "Customizable Profile"){
                box_3.current.classList.add("active");
                check_3.current.classList.add("active");
            }
        });
            
    })
    
    //The fees
    let online_serviceFee = usersPeriodType==="monthly" ? "+$1/mo" : "+$10/yr",
        larger_storageFee = usersPeriodType==="monthly" ? "+$2/mo" : "+$20/yr",
        customizable_profileFee = usersPeriodType==="monthly" ? "+$2/mo" : "+$20/yr";

    return(
        <>
            <section id="step_3">
                <div className="part_1">
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>

                <div className="part_2">
                    <div className="box" onClick={()=>{handleAddAddOns("Online Service", 1)}} ref={box_1}>
                        <div>
                            <div className="check_part">
                                <input type="checkbox" ref={check_1}/>
                            </div>
                            <div className="text_part">
                                <h3>Online service</h3>
                                <p>Access to multiplayer games</p>
                            </div>
                        </div>
                        <div className="price_part">
                            <p className="online_addon">{online_serviceFee}</p>
                        </div>
                    </div>

                    <div className="box" onClick={()=>{handleAddAddOns("Larger Storage", 2)}} ref={box_2}>
                        <div>
                            <div className="check_part">
                                <input type="checkbox" ref={check_2}/>
                            </div>
                            <div className="text_part">
                                <h3>Larger storage</h3>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                        </div>
                        <div className="price_part">
                            <p className="storage_addon">{larger_storageFee}</p>
                        </div>
                    </div>

                    <div className="box" onClick={()=>{handleAddAddOns("Customizable Profile", 3)}} ref={box_3}>
                        <div>
                            <div className="check_part">
                                <input type="checkbox" ref={check_3}/>
                            </div>
                            <div className="text_part">
                                <h3>Customizable Profile</h3>
                                <p>Custom theme on your profile</p>
                            </div>
                        </div>
                        <div className="price_part">
                            <p className="profile_addon">{customizable_profileFee}</p>
                        </div>
                    </div>
                </div>

                <div className="part_3">
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

export default Step_3;