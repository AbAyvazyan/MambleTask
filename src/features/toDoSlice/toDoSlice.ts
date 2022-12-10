import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";
import uuid from "react-uuid";


export type todoType={
    id:string
    text:string;
    isHidden:boolean;
    hided:boolean
}

export const initialState:todoType[]=[

]

export const toDoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add:(state:todoType[],action:PayloadAction<string>)=>{
             state.push({
                 id:uuid(),
                 text:action.payload,
                 isHidden:false,
                 hided:false
             })
        },

        makeChecked:(state:todoType[],action:PayloadAction<string>)=>{
            state.map(elem=>{
                if (elem.id===action.payload){
                    elem.isHidden=!elem.isHidden
                }
                return elem
            })
        },

        hideAll:(state:todoType[])=>{
            state.map(elem=>{
                if (elem.isHidden){
                    elem.hided=!elem.hided
                }
                return elem
            })
        },

        _delete:(state:todoType[],action:PayloadAction<{id:string}>)=>{
            const index = state.findIndex(elem=>elem.id===action.payload.id)
            state.splice(index,1)
        },

        putLocalValues:(state:todoType[],action:PayloadAction<todoType[]>)=>{
            state.push(...action.payload)
        }
}})


export const {add,makeChecked,_delete,hideAll,putLocalValues} = toDoSlice.actions

export default toDoSlice.reducer