// named "...otherProps" for learning purposes. you can name these whatever you want,
// 		conventionally used as simply "props".
export default function TabButton({ children, isSelected, ...otherProps }) {
	return (
		<li>
			<button className={isSelected ? "active" : undefined} {...otherProps}>
				{children}
			</button>
		</li>
	);
}
