export default function Tabs({ children, buttons, ContainerType = "menu" }) {
	// const ButtonsContainer = buttonsContainer;
	return (
		<>
			<ContainerType>{buttons}</ContainerType>
			{children}
		</>
	);
}
