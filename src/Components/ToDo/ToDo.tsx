import './ToDo.css'
import React, {FC, MouseEventHandler, useRef, useState} from "react";
import {todoType} from "../../features/toDoSlice/toDoSlice";


export type ToDoType= {
    id: string,
    taskName: string,
    isHidden: boolean,
    checkedHideAll:boolean,
    onChecked: () => void,
    deleteToDo: () => void
}

const ToDo:FC<ToDoType> = ({taskName,isHidden,id,onChecked,deleteToDo,checkedHideAll}) =>{


    const [surePart,setsSurePart] = useState(false)

    return(<>
        <div className={'todo'}>
            <div >
                <label className="container" >
                    <input type="checkbox" onChange={checkedHideAll ? ()=>{} : ()=>onChecked()} checked={isHidden}/>
                    <span className="checkmark" ></span>
                </label>
            </div>

            {!isHidden ? <div className={'todo_task_name'}>{taskName}</div> :
            <div className={'todo_task_name_marked'}>{taskName}</div>}

            <span className={'delete_icon'} onClick={()=>setsSurePart(true)}>&#10006;</span>
        </div>

            {surePart ?
                <div className={'are_you-sure_part'}>
                    <div className={'are_you-sure'}>
                        <div className={'are_you-sure_text'}>Are you sure you want to delete?</div>

                        <div className={'are_you_sure_button_part'} >
                            <div><span onClick={()=>deleteToDo()}>Yes</span></div>
                            <div><span onClick={()=>setsSurePart(false)}>No</span></div>
                        </div>
                    </div>
                </div>:
                <></>
            }
        </>
    )
}

export default ToDo