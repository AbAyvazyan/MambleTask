import './MainLayout.css'

import React from "react";

import Empty from "../Empty";
import ToDo from "../ToDo";
import {RootState} from "../../app/store";


import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {add} from "../../features/toDoSlice/toDoSlice";


const MainLayout = () =>{
    const [inputValue,setInputValue] = useState('')
    const [inputClass,setInputClass] = useState('add_text_part')

    function inputValueChangeHandler(text:string){
        if (text.length<54){
            setInputValue(text);
            setInputClass('add_text_part')
        }else{
            setInputClass('add_text_part_errored')
        }
    }


    const TODO = useSelector((state: RootState) => state.TODO)
    const dispatch = useDispatch()

    console.log(TODO)

    const onToDOAddButtonHandler=(inputText:string):void=>{
        inputValue.length<54 && inputValue.length>0 ? dispatch(add(inputText)) : <></>
        setInputValue('')
    }


    return(
        <>
        <div className={'main_part_container'}>
            <div className={'hide_completed_button_part'}>
                <label className="container">Hide Completed
                    <input type="checkbox"/>
                        <span className="checkmark"></span>
                </label>
            </div>


            <div className={'control_part'}>
                <div className={'text_on_input'}>Task</div>

                <div className={inputClass}>
                    <input type="text"  placeholder={"Write here"} value={inputValue}
                           onChange={(e:React.FormEvent<HTMLInputElement>):void=>inputValueChangeHandler(e.currentTarget.value)}/>
                </div>

                <div className={'add_button_part'}>
                    <div className={'add_button'} onClick={()=>onToDOAddButtonHandler(inputValue)}>Add</div>
                </div>
            </div>

            <div className={'section_part'}>
                {TODO.length>0?
                    TODO.map((singleOne)=>{
                            return <ToDo isHidden={singleOne.isHidden} taskName={singleOne.text}/>
                        }):
                    <Empty/>
                }
            </div>
        </div>
        </>
    )
}

export default MainLayout