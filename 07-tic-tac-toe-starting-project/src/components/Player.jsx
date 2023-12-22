import { useState } from "react";

export default function Player({ initialName, symbol }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		// setIsEditing(isEditing ? false : true);
		// setIsEditing(!isEditing); || React is SCHEDULING these state updates. So this state update is not performed
		// 							 || instantly, instead it is scheduled by react to be performed in the future.
		//							 || The future may be 1-2ms, however it is not instant.
		setIsEditing((editing) => !editing);
		// passing a function will be called by React and it will automatically get the current state value [the value before this state update] as an input.
		// NOTE: the parameter is called 'editing', you can name this anything.
		// 		'editing' is simply "true" or "false" just like 'isEditing', but 'editing' will be dynamically set and passed as a value by React when it calls this function.
		// 		and this function which you pass to 'setIsEditing' should then return the new state you want to set.
	}

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	// let btnCaption = 'Edit';

	if (isEditing) {
		editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
	}

	return (
		<li>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
