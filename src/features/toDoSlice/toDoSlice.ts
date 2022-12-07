import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";
import uuid from "react-uuid";


export type todoType={
    id:string
    text:string;
    isHidden:boolean;
}

export const initialState:todoType[]=[

]

export const toDoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add:(state,action:PayloadAction<string>)=>{
             state.push({
                 id:uuid(),
                 text:action.payload,
                 isHidden:false
             })
        }
    }
})


export const {add} = toDoSlice.actions

export default toDoSlice.reducer