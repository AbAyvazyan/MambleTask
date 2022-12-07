import './ToDo.css'
import {FC} from "react";

export type ToDoType={
    taskName:string,
    isHidden:boolean
}

const ToDo:FC<ToDoType> = ({taskName,isHidden}) =>{
    return(
        <div className={'todo'}>
            <div>
                <label className="container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>

            {!isHidden ? <div className={'todo_task_name'}>{taskName}</div> :
            <div className={'todo_task_name_marked'}>{taskName}</div>}

            <span className={'delete_icon'}>&#10006;</span>
        </div>
    )
}

export default ToDo