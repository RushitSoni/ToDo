import React, { useState } from 'react'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

import { add } from './Reducers';
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

var i=1
export default function Create() {


    
    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')
    const dispatch=useDispatch()
    const todos=useSelector((state)=>state.todos)
    const navigate=useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault()

        console.log(title)
        console.log(desc)
       
//[{todos}?(todos[todos.length -1].id +1):(1)]
        

       
        
        dispatch(add({id:i,title,desc}))
        i=i+1
        console.log(todos)
        navigate('/')
    }
   
  

  return (
    <div style={{display:"flex",marginTop:'15%',justifyContent:'center',alignItems:'center'}}>
     <form onSubmit={handleSubmit}>
     {/* <div>name <input type='text' name='name'className='form-control' onChange={e=>setName(e.target.value)}></input></div>
      <div>email <input type='email' name='email' className='form-control' onChange={e=>setEmail(e.target.value)}></input></div> */}
      <Card sx={{ minWidth: 275 }} >
      <CardContent style={{padding:"10%"}}>

          <TextField required name='title'  label="Title" variant="outlined" onChange={(e)=>{setTitle(e.target.value);console.log(title)}} style={{marginBottom:'15%'}}/>
          <br></br>
          <TextField required name='desc'  label="Description" variant="outlined" onChange={e=>setDesc(e.target.value)}/>
        
      </CardContent>
      <CardActions>
        <Button type='submit' size="small">ADD To-Do + </Button>
      </CardActions>
    </Card>


      
     </form>
    </div>
  )
}