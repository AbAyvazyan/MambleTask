import './MainLayout.css'

import React from "react";

import Empty from "../Empty";
import ToDo from "../ToDo";
import {useState} from "react";


const MainLayout = () =>{
    const [inputValue,setInputValue] = useState('')

    function inputValueChangeHandler(text:string){
        text.length<54 ? setInputValue(text) : alert(1236)
    }

    console.log(inputValue)

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

                <div className={'add_text_part'}>
                    <input type="text" className={'text_input_bar'} placeholder={"Write here"}
                           onChange={(e:React.FormEvent<HTMLInputElement>):void=>inputValueChangeHandler(e.currentTarget.value)}/>
                </div>

                <div className={'add_button_part'}>
                    <div className={'add_button'}>Add</div>
                </div>
            </div>

            <div className={'section_part'}>
                {/*<Empty/>*/}

                <ToDo taskName={'Barev'}/>
                <ToDo taskName={'Barev'}/>
                <ToDo taskName={'Barev'}/>
                <ToDo taskName={'Barev'}/>
                <ToDo taskName={'Barev'}/>
                <ToDo taskName={'Barev'}/>

            </div>
        </div>
        </>
    )
}

export default MainLayout