export function TodoFunc({ children, isComplete }) {
	return (
		<label>
			<input type="checkbox" defaultChecked={isComplete} />
			{children}
		</label>
	)
}

//
