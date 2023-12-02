import { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		const localValue = localStorage.getItem(key)
		if (localValue == null) {
			return initialValue
		} else {
			return localValue
		}
	})

	useEffect(() => {
		localStorage.setItem(key, value)
	}, [value, key])

	return [value, setValue]
}
