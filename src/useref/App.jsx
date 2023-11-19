import { useState, useRef, useEffect } from "react"

function App() {
	const [name, setName] = useState("")
	const inputRef = useRef("")

	// useEffect is run after the component is run 
	useEffect(() =>{
		console.log(inputRef.current.value)
	}, [name])

	return (
		<>
			<label>
				Name:
				<input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			{/* <button onClick={() => (seanRef.current = Math.random())}>
				Button
			</button>
			<button onClick={() => console.log(seanRef.current)}>
				Print Ref
			</button> */}
		</>
	)
}

export default App
