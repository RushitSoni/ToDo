import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { update } from './Reducers'
import { useDispatch } from 'react-redux'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export default function Update() {

    const {id}=useParams()
    const todos=useSelector((state)=>state.todos)
    const existingTodo=todos.filter(f=>f.id == id)

    const {title,desc}=existingTodo[0]

    const [utitle,setTitle]=useState(title)
    const [udesc,setDesc]=useState(desc)

    const navigate=useNavigate()
    const dispatch=useDispatch()



    const handleUpdate=(event)=>{
        event.preventDefault()
        dispatch(update({id:id,title:utitle,desc:udesc}))
        navigate('/')
    }
  return (
    <div style={{display:"flex",marginTop:'15%',justifyContent:'center',alignItems:'center'}}>
     <form onSubmit={handleUpdate}>
       {/* <div>name <input type='text' name='name'className='form-control' value={uname} onChange={e=>setName(e.target.value)}></input></div>
      <div>email <input type='email' name='email' className='form-control'value={uemail} onChange={e=>setEmail(e.target.value)}></input></div> */}
    
    <Card sx={{ minWidth: 275 }} >
      <CardContent style={{padding:"10%"}}>

          <TextField required name='title' id="outlined-basic" label="Title" variant="outlined" value={utitle} onChange={e=>setTitle(e.target.value)} style={{marginBottom:'15%'}}/>
          <br></br>
          <TextField required name='desc' id="outlined-basic" label="Description" variant="outlined" value={udesc} onChange={e=>setDesc(e.target.value)}/>
        
      </CardContent>
      <CardActions>
       
        <Button  color='success' type='submit' variant="contained"   style={{marginBottom:10}} >Update</Button>
      </CardActions>
    </Card>
        
     
     </form>
    </div>
  )
}
