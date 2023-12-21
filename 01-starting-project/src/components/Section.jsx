// the thre dots {...props} is called "Rest Property" This syntax groups all
//      remaining object properties into a new object (named "props" in this case).
//      if i had {...newObjects} they would be named "newObjects" in that case.
export default function Section({ title, children, ...props }) {
	return (
		<section {...props}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}
