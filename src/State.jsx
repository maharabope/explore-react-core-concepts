import { useState } from "react"

export default function UpdateTeam(){
    const [num, setTeam]=useState(11);
    const NewTeam=()=>{
        const newNum= num+1;
        setTeam(newNum)

    }
    const Remove=()=>{
        const Newnum=num-1;
        setTeam(Newnum)
    }
    return(
        <div>
            <h3>Student: {num} </h3>
            <button onClick={NewTeam}>Add</button>
            <button onClick={Remove}>Remove</button>
        </div>
    )
        
    
}