import { useEffect, useState } from "react"

export default function App() {
	const [users, setUsers] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState()

	useEffect(() => {
		setLoading(true)
		setError(undefined)
		setUsers()
		const controller = new AbortController()
		fetch("https://jsonplaceholder.typicode.com/users", {
			signal: controller.signal,
		})
			.then((res) => {
				if (res.status === 200) {
					return res.json()
				} else {
					return Promise.reject(res)
				}
			})
			.then((data) => {
				setUsers(data)
			})
			.catch((e) => {
				if (e?.name === "AbortError") return
				setError(e)
			})
			.finally(() => {
				setLoading(false)
			})
		return () => {
			controller.abort()
		}
	}, [])

	let jsx
	if (loading) {
		jsx = <h2>Loading...</h2>
	} else if (error != null) {
		jsx = <h2>Error!</h2>
	} else {
		jsx = JSON.stringify(users)
	}
	return (
		<div>
			<h1>Users</h1>
			{}
			{jsx}
		</div>
	)
}
