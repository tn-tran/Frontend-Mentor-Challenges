import React from 'react'
function CreateTodoBar() {
  return (
  <label className="container-todo">
    <span className="checkmark"></span>
    <input className='todobar-input' type="text" placeholder='Create a new todo...' />
  </label>
  )
}

export default CreateTodoBar