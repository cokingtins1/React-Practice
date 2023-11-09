import { useState } from "react"
import { Counter } from "./Counter"

function slowGetter() {
	// really slow code
	return "Jimmy"
}

function App() {
	// If you pass a func to useSate, it runs that func only once and never again
	const [name, setName] = useState("Sean")
	const [age, setAge] = useState(27)

 

	function handleClick() {
		setName("Sally")
		setAge((currentAge) => {
			return currentAge + 1
		})
		setAge((currentAge) => {
			return currentAge + 1
		})
	}



	return (
		<div>
			<h1 onClick={handleClick}>
				Hi {name} {age}
			</h1>
            <Counter/>
		</div>
	)
}

export default App
