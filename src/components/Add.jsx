import { Button } from '@mui/base'
import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = (props) => {
    var[datas,setDatas] =useState(props.data)
    //usenavigator use
    console.log("method:",props.method)
    const navigate = useNavigate();
    const inpuHandler=(e)=>{
        const{name,value}=e.target
        setDatas((datas)=>({...datas,[name]:value}))
    }
    const addHandler=()=>{
        console.log("clicked")
        if(props.method ==='post'){
        axios.post("http://localhost:3005/new",datas)
        .then((response)=>{
            alert("sucessfully added")
            navigate('/view');
        })
        .catch(err=>console.log(err))

    }
    if(props.method==='put'){
        axios.put("http://localhost:3005/edit/"+datas._id,datas)
        .then((response)=>{
          alert("updated suceesfully")  
          window.location.reload(false)

        })
        .catch(err=>console.log(err))
    }
}
  return (
    <div style={{paddingTop:'70px'}}>
     <TextField   label="Name"name='sname' value={datas.sname} variant="filled" onChange={inpuHandler}/><br/><br/><br/>
     <TextField   label="Age" name='age'value={datas.age}variant="filled" onChange={inpuHandler}/><br/><br/><br/>
     <TextField   label="Position" name='pos'value={datas.pos}variant="filled" onChange={inpuHandler}/><br/><br/><br/>
     <TextField label="Salary" name='sal'  value={datas.sal}variant="filled" onChange={inpuHandler}/><br/><br/><br/>
      <Button varient='contained'onClick={addHandler} >SUBMIT</Button>
    </div>
  )
}

export default Add
