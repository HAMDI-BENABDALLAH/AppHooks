import React from 'react'
import Todo from './Todo'
const TododList = ({tasks,del,comp}) => {
  return (
    <div>
      {tasks.map(el=><Todo el={el} del={del}comp={comp}/>)}
    </div>
  )
}

export default TododList
