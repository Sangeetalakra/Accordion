import { useState } from "react";
const Accordion =({index,onClick,selected})=>{
    const[buttonState,setButtonState]= useState(false);
    console.log(buttonState, selected, index)
    return(
        <>
        <div className="buttonDiv"><button onClick={() =>{setButtonState(!buttonState); onClick(index)}}>click</button>
        <div>
            {buttonState && selected===index?(
                <div className='textDiv'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam quis reiciendis optio, earum dolorum voluptas repudiandae eius, quasi incidunt ratione fugit provident, sed maxime ab voluptatem error aspernatur quibusdam?</p></div>
            ):(
                null
            )}
            
        </div>
        </div>
        </>
    )
}
export default Accordion