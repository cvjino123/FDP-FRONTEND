import {  DeleteForever } from '@mui/icons-material';
import { Button, Fab, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Add from './Add';
const ViewEmployee = () => {
var [employees,setEmployees] = useState([]);
var[oneValue,setOnevalue] = useState([]);
var[edit,setEdit] =  useState(false);
useEffect(()=>{
  axios.get("http://localhost:3005/view")
  .then(response =>{
    console.log(response.data)
    setEmployees(response.data)     })
  .catch(err=>console.log(err))
},[])
const deleteValues=(id)=>{
  console.log("deleted",id)
  axios.delete("http://localhost:3005/remove/"+id)
  .then((response)=>{
    alert("Deleted")
    //to reload window
    window.location.reload(false);
  })
}

const updateValues=(value)=>{
  console.log("updated:",value)
  setOnevalue(value);
  setEdit(true);
 
}
var finalJSX =
<TableContainer style={{paddingTop:"80px"}} >
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell>AGE</TableCell>
                    <TableCell>POSITON</TableCell>
                    <TableCell>SALARY</TableCell>
                </TableRow>
            </TableHead>
                <TableBody>
                {employees.map((value,index)=>{
                  return(
                    //to remove prop error
                    <TableRow key={index}>
                      {/* <TableCell>{value._id}</TableCell>   */}
                      <TableCell>{value.sname}</TableCell>
                      <TableCell>{value.age}</TableCell>
                      <TableCell>{value.pos}</TableCell>
                      <TableCell>{value.sal}</TableCell>
                      <TableCell>
                      <DeleteForeverIcon color='error' onClick={()=>deleteValues(value._id)}/>
                      </TableCell>
                      <TableCell>
                      <ModeEditIcon color='success' onClick={()=>updateValues(value)}/>
                      
      
                      </TableCell>
                    </TableRow>
                  )
                })}
                </TableBody>
            
        </Table>
      </TableContainer>
if(edit)
finalJSX=<Add data={oneValue} method='put'/>

  return (
         finalJSX
  
  )
}

export default ViewEmployee
