import React from "react"
// import { TodoList } from "./TodoList"
import { TodoListClass } from "./TodoListClass"
import { Name } from "./NameClass"
import { TodoFunc } from "./TodoFunc"

function App() {
	return (
		<div>
			<h1>Todo List</h1>
			<TodoFunc isComplete>Todo Item 1</TodoFunc>
		</div>
	)
}

export default App
