import React from 'react'
import TodoBar from './CreateTodoBar'
import TodoHeader from './TodoHeader.jsx'
import TodoFooter from './TodoFooterContainer'


function TodoContainer() {
  return (
    <div className='todo-container'>
      <TodoHeader/>
      <TodoBar/>
      {/* Array of Todos */}
      <TodoFooter />
    </div>
  )
}

export default TodoContainer