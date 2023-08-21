import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function  () {


    const [data,setData]=useState('')
    useEffect(()=>{
        axios.get('https://api.quotable.io/random')
        .then((response)=>{setData(response['data'])})
        .catch(err => {
          console.log(err)  
         });
    },[])
  return (
    <div>


        <Card variant="outlined" style={{marginTop:'2%',padding:'1%'}}>
                
                <div style={{justifyContent:'center'}}>
                    " {data['content']}"
                </div>
                <div style={{textAlign:'right'}}>
                    -{data['author']}

                </div>
                
           
        </Card>
      
    </div>
  )
}
