import { useState } from "react";

function Ball({ num, isSelected, handleClick }) {
    return (
        <div className={`ball ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
            <span>{num}</span>
        </div>
    );
}

export default Ball;
