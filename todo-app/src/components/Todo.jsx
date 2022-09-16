import React from 'react'
// A todo can:
// Checked as done
// Be deleted
// Dragged into a different order
// Updated

// UI
// button with checkmark
// hover pointer to button and text
// cross todo
// X mark
// 
// common elements styles
function Todo({text}) {

  return (
<label className="container-todo">
  <input type="checkbox" />
  <span className="checkmark"></span>
  {text}
</label>
  )
}

Todo.defaultProps = { 
  text: 'Create a new todo ...'
}

export default Todo