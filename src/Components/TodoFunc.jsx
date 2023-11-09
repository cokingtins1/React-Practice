export function TodoFunc({ children, isComplete }) {
	// this is a component. Things are being passed into this component i.e. the children of "Todo Item 1" from App()
	return (
		<label>
			<input type="checkbox" defaultChecked={isComplete} />
			{children}
		</label>
	)
}
