import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UpdateTeam from './State'
import Effect from './Effect'

function App() {


  const [count, setCount] = useState(0)

  const data=[
    {id:1, name:'Amrin', roll:34, class:4 },
    {id:2, name:'Minhaz', roll:24, class:4 },
    {id:3, name:'Sayed', roll:64, class:4 },
    {id:1, name:'Mallu', roll:44, class:4},
  ];

  return (
    <>
    <h1>React</h1>
     <Effect></Effect>
     
      
      <UpdateTeam></UpdateTeam>
      
    { data.map(student=><Student props={student}></Student>

     )}
      
     
    </>
  )
}

function Student({props}){
  // props.map( const student()=>console.log(student))
  // console.log(props)

  const style={
    border: "2px solid tomato"
  }

  return (
    < div style={style}>
    <h2>Student Name is {props.name}</h2>
    <h3>Roll : {props.roll} </h3>
    <h3>class : {props.class} </h3>
    </div>
  )
}

export default App
