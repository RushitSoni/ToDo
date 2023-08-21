import {createSlice} from '@reduxjs/toolkit'

const todoSlice= createSlice({
    name:'todos',
    initialState:[
    //    { id:1,
    //     title:'rushit',
    //     desc:'oop'},
       ],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
        update:(state,action)=>{
            const {id,title,desc}=action.payload
            const tf=state.find(todo=>todo.id==id)

            if(tf){
                tf.title=title
                tf.desc=desc
            }
        },
        deletee:(state,action)=>{
            const {id}=action.payload
            const tf=state.find(todo=>todo.id==id)

            if(tf){
                return state.filter(todo=>todo.id !== id)
            }
        }
    }

})

export const {add}=todoSlice.actions
export const {update,deletee}=todoSlice.actions
export default todoSlice.reducer