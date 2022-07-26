import { useState } from "react";

export default function MyForm() {
	const [name, setName] = useState("tuan");
	return (
		<div>
			<h1>Your name is {name}</h1>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
}
