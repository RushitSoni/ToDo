
import React from 'react'
import Table from 'react-bootstrap/Table';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { deletee} from './Reducers';
import Quote from './Quote';

export default function Home() {

    const todos=useSelector((state)=>state.todos)
    // console.log(users)

    const dispatch=useDispatch()
    const handleDel=(id)=>{

        dispatch(deletee({id:id}))

    }

   
    
  return (
    
    <div  style={{margin:5}}>
      <Quote></Quote>
        <h1 style={{color:'blue',fontWeight:800}}>To-Do List</h1>
        
        {/* <Link to='/create'>Creaete</Link> */}

        <Button variant='outlined' color="primary"><Link to='/create'  style={{textDecoration:'none',color:'Blue',fontWeight:400}}className='btn btn-sm btn-primary'>Create +</Link ></Button>
        <br></br>
        {/* <Button variant="contained" href="create"    style={{marginBottom:10}} >Create To-Do +</Button> */}
        <br></br>
      {/* <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
            {users.map((user,index)=>(
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edit/${user.id}`}  className='btn btn-sm btn-primary'>Edit</Link >
                        <button onClick={()=>handleDel(user.id)} className='btn btn-sm btn-primary'>Delete</button>
                    </td>
                </tr>
            ))}
      </tbody>
    </Table> */}
<div>
  {console.log(todos)}
{todos.map((todo,index)=>(
  // 
  
      
        <Card sx={{ minWidth: 275 }} key={index} style={{width:'25%',display:'inline-block'}}>
        <CardContent>

        <Typography variant="h5" component="div">
            Title:
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {todo.title}
          </Typography>

          <Typography variant="h5" component="div">
            Description:
          </Typography>
         
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {todo.desc}
          </Typography>
         
        </CardContent>
        <CardActions style={{justifyContent:'space-between'}}>
         <Button variant='outlined' color="secondary"><Link to={`/edit/${todo.id}`}  style={{textDecoration:'none',color:'black',fontWeight:400}}className='btn btn-sm btn-primary'>Edit</Link ></Button> 
          {/* <Button variant="primary" href={`edit/${todo.id}`}  style={{marginBottom:10}} >Edit</Button> */}
          
          <Button variant="outlined" startIcon={<DeleteIcon />}color='error' onClick={()=>handleDel(todo.id)}>
            Delete
          </Button>
        </CardActions>
        </Card>
                
            ))}

</div>
    </div>


  )
}
