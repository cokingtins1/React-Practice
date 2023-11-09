import { useState } from "react"

function App() {
	const [name, setName] = useState("Sean")

	return (
		// using value and onChange is a "controled" input meaning React has control on the input.
		// using defaultValue is an "uncontrolled" input meaning the the browser has control on the input.
		<div>
			<label htmlFor="">Controlled input:</label>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<br />
			<label htmlFor="">Uncontrolled input:</label>
			<input type="text" defaultValue={name} />
		</div>
	)
}

export default App
