import { useState } from "react"

export function Counter() {
	const [count, setCount] = useState(0)

	function handleCountClick() {
		setCount((currentCount) => {
			return currentCount + 1
		})
	}

	return <h1 onClick={handleCountClick}>counter: {count}</h1>
}
