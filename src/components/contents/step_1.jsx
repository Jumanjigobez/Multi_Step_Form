import React, {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nextStepAction, addInfoAction } from '../../store/actions';

const Step_1 = () =>{

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const usersInfoReducer = state.usersInfoReducer;//Taking the users input be as default value when returning back

    const nameInput = useRef();
    const emailInput = useRef();
    const phoneInput = useRef();

    const handleNextStep = () =>{

        let valid_name = /^[a-z][a-z\s]*$/,
            valid_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            valid_phone = /^[0-9]*$/;

        if(nameInput.current.value!=="" && emailInput.current.value!=="" && phoneInput.current.value!=="" &&
        nameInput.current.value.match(valid_name) && emailInput.current.value.match(valid_email) && phoneInput.current.value.match(valid_phone) && 
        phoneInput.current.value.length === 10){
            phoneInput.current.value = phoneInput.current.value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/,'+$1 $2 $3 $4')
            dispatch(addInfoAction(nameInput.current.value, emailInput.current.value, phoneInput.current.value))
            dispatch(nextStepAction())
          
        }else{
            if(nameInput.current.value!=="" && nameInput.current.value.match(valid_name)){
                nameInput.current.style = "border: 1px solid var(--Light-gray)";
                nameInput.current.parentNode.querySelector(".error").style = "display: none";
            }else if(nameInput.current.value === ""){
                nameInput.current.style = "border: 1px solid var(--Strawberry-red)";
                nameInput.current.parentNode.querySelector(".error").innerText = "This field is required";
                nameInput.current.parentNode.querySelector(".error").style = "display: block";
            }else{
                nameInput.current.style = "border: 1px solid var(--Strawberry-red)";
                nameInput.current.parentNode.querySelector(".error").innerText = "Text only required";
                nameInput.current.parentNode.querySelector(".error").style = "display: block";
            }

            if(emailInput.current.value!=="" && emailInput.current.value.match(valid_email)){
                emailInput.current.style = "border: 1px solid var(--Light-gray)";
                emailInput.current.parentNode.querySelector(".error").style = "display: none";
            }else if(emailInput.current.value === ""){
                emailInput.current.style = "border: 1px solid var(--Strawberry-red)";
                emailInput.current.parentNode.querySelector(".error").innerText = "This field is required";
                emailInput.current.parentNode.querySelector(".error").style = "display: block";
            }else{
                emailInput.current.style = "border: 1px solid var(--Strawberry-red)";
                emailInput.current.parentNode.querySelector(".error").innerText = "Invalid email";
                emailInput.current.parentNode.querySelector(".error").style = "display: block";
            }

            if(phoneInput.current.value!=="" && phoneInput.current.value.match(valid_phone) && phoneInput.current.value.length === 10){
                phoneInput.current.value = phoneInput.current.value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/,'+$1 $2 $3 $4')
                phoneInput.current.style = "border: 1px solid var(--Light-gray)";
                phoneInput.current.parentNode.querySelector(".error").style = "display: none";
                
               
            }else if(phoneInput.current.value === ""){
                phoneInput.current.style = "border: 1px solid var(--Strawberry-red)";
                phoneInput.current.parentNode.querySelector(".error").innerText = "This field is required";
                phoneInput.current.parentNode.querySelector(".error").style = "display: block";
            }else{
                phoneInput.current.style = "border: 1px solid var(--Strawberry-red)";
                phoneInput.current.parentNode.querySelector(".error").innerText = "Ten Numbers only required";
                phoneInput.current.parentNode.querySelector(".error").style = "display: block";
            }
        } 
    }

    return(
        <>
            <section id="step_1">
                <div className="part_1">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>

                <div className="part_2">
                    <form className="info_form">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" defaultValue={usersInfoReducer.name} placeholder="e.g. Stephen King" required="" ref={nameInput}/>
                        <p className='error'></p>
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email"  defaultValue={usersInfoReducer.email}  placeholder="e.g. stephenking@lorem.com" required="" ref={emailInput}/>
                        <p className='error'></p>
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name="phone" id="phone"  defaultValue={usersInfoReducer.phone} placeholder="e.g. +1 234 567 890" required="" ref={phoneInput}/>
                        <p className='error'></p>
                    </div>
                    </form>
                </div>

                <div className="part_3">
                    <div className="btn_1">
                    
                    </div>

                    <div className="btn_2">
                    <button className="btn" onClick={()=>handleNextStep()}>Next Step</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Step_1;