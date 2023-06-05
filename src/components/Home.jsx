import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    var [users,setUsers,setfname]= useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            console.log(response)
            setUsers(response.data)
        })
        .catch(err=>console.log(err))
    },[])
   
    
    
  return (
    <div style={{padding:'100px'}}>
      <TableContainer>
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
                {users.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.name}</TableCell>
                </TableRow>
                    )

                })}
                </TableBody>
            
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
