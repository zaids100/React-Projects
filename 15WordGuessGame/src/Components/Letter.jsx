function Letter({char,isMatch}){
         return(
            <button className="letter" onClick={()=>
                 isMatch(char)
            }><b>{char}</b></button>
         )
}

export default Letter