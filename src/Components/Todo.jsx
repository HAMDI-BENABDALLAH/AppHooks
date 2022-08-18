import React from 'react'

const Todo = ({el,del,com}) => {
  return (
    <div>
        <h1 className={el.isDone?'complete':''}>{el.action}</h1>
        <button onClick={()=>comp(el.id)}>{el.isDone?"undo":"complete"}</button>
        <button onClick={()=>del(el.id)}>delete</button>
      


    </div>
  )
}

export default Todo