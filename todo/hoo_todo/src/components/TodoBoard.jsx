import React from "react"
// import TodoItem from "./TodoItem"

function TodoBoard(props) {
	return (
		<div>
			<h1>Todo List</h1>
			{console.log(props)}
			{/* {props.todoList.map((item) => <TodoItem item={item}/>)} */}
		</div>
	)
}

export default TodoBoard