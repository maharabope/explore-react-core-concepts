import { useEffect, useState } from "react"
import Friend from "./friend"

export default function Effect(){

    const [friends, setFriends]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
        
    })
    return(
        

        <div>
            {friends.map(friend=><Friend friend={friend}></Friend>)}

        <h3>Name:{friends.length}</h3>
        <p>Email:</p>
        </div>
    )
}