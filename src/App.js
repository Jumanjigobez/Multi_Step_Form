import React from 'react';
import { useSelector} from 'react-redux';

import Sidebar from './components/sidebar';
import PhoneSidebar from './components/phoneSidebar';

import Step_1 from './components/contents/step_1';
import Step_2 from './components/contents/step_2';
import Step_3 from './components/contents/step_3';
import Step_4 from './components/contents/step_4';
import Success from './components/success';


const App = () =>{
    const state = useSelector(state => state)
    const StepReducer = state.StepReducer;
    // console.log(state)
    
    switch(StepReducer.currentStep){
        case 1:{ 
            return(
                <>
                    <PhoneSidebar />{/* Will be displayed only on small screen viewers 😎*/}

                    <Sidebar />
                    <Step_1 />
                </>
            )
        }
        case 2:{
            return(
                <>
                    <PhoneSidebar />

                    <Sidebar />
                    <Step_2 />
                </>
            )
        }
        case 3:{
            return(
                <>
                    <PhoneSidebar />

                    <Sidebar />
                    <Step_3 />
                </>
            )
        }
        case 4:{
            return(
                <>
                    <PhoneSidebar />

                    <Sidebar />             
                    <Step_4 />
                </>
            )
        }
        case 5:{
            return(
                <>
                    <PhoneSidebar />

                    <Sidebar />             
                    <Success />
                </>
            )
        }
        default:{
            return(
                <>
                    <PhoneSidebar />
                    
                    <Sidebar />
                    <Step_1 />
                </>
            )
        }

    }
    
}

/*const mapStateToProps = (state) =>{
    return {
        state: state
    }
}*/

export default App;