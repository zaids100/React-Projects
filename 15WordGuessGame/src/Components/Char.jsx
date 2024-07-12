import { useState } from "react"

function Char({char,show}){
        
        
     
        return(
            <div className="char-div">
                <span className="char">{
                      show && char
                    }</span>
            </div>
        )
}

export default Char