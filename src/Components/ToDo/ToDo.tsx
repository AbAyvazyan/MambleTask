import './ToDo.css'
import {FC} from "react";

export type ToDoType={
    taskName:string
}

const ToDo:FC<ToDoType> = ({taskName}) =>{
    return(
        <div className={'todo'}>
            <div>
                <label className="container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className={'todo_task_name'}>{taskName}</div>

            <span className={'delete_icon'}>&#10006;</span>
        </div>
    )
}

export default ToDo