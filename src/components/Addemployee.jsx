import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Addemployee = () => {
  var[inputs,setInputs] = useState({sname:'',age:'',pos:'',sal:''})
  const inputHandler =(e)=>{
    const {name,value} =e.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }
  return (
    <div style={{paddingTop:'80px'}}>
      <TextField name='sname' value={inputs.sname} label="Name" variant="filled" onChange={inputHandler} /><br/><br/>
      <TextField  name='age' value={inputs.age}label="Age" variant="filled" onChange={inputHandler} /><br/><br/>
      <TextField name='pos' value={inputs.pos} label="Position" variant="filled" onChange={inputHandler}/><br/><br/>
      <TextField  name='sal' value={inputs.sal} label="Salary" variant="filled" onChange={inputHandler}/><br/><br/>
      <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Addemployee
