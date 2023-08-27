import React from 'react';

const Success = () =>{
    const handleRestart = (btn) =>{
        btn.target.innerText = "Clearing..."
        setTimeout(()=>{
            
            window.location.reload();
        },1000)
        
    }
    return(
        <>
            <section id="thank_you">
                <div className="part_1">
                    <img src="Multi_Step_Form/assets/images/icon-thank-you.svg" alt="confirmed icon"/>
                </div>

                <div className="part_2">
                    <h2>Thank you!</h2>
                </div>

                <div className="part_3">
                    <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                </div>

                <div className="part_4">
                    <button className='btn' onClick={(e)=>handleRestart(e)}>Restart</button>
                </div>
            </section>
        </>
    )
}

export default Success;