import React from "react";

function TodoItem(props) {
	
	return (
	<div className="todo-item">
		{console.log(props)}
		{props.item} <button>삭제</button>
	</div>
	)
}

export default TodoItem