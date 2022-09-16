import React from 'react'
import Title from './Title'
import ToggleModeButton from './ToggleModeButton'

function TodoHeader() {
  return (
    <div className="todo-header">
      <Title></Title>
      <ToggleModeButton></ToggleModeButton>
    </div>
  )
}

export default TodoHeader