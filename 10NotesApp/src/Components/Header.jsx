import { useState } from "react";

function Header({handleDarkMode}){
        return (
            <div className="header">
                <span>Notes</span>
                <button className="toggle" onClick={()=>{
                    handleDarkMode((prev)=>!prev)
                }}>Toggle</button>
            </div>
        )
}

export default Header;