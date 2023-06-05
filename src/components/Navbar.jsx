import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography align ='left' sx={{ flexGrow: 1 }}>EMPLOYEE APP</Typography>
            <Button variant="contained"><Link to={'/'} style={{textdecoration:'none',color:'white'}}>HOME</Link></Button>
            <Button variant="contained"><Link to={'/add'}style={{textdecoration:'none',color:'white'}}>ADD</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
