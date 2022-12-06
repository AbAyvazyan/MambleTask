import './Empty.css'

const Empty = () =>{
    return(
        <div className={'empty_todo'}>
            <div className={'empty_todo_first'}>Your life is a blank page. You write on it.</div>
            <div  className={'empty_todo_second'}>So start by adding your tasks here.</div>
        </div>
    )
}

export default Empty