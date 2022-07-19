import { useState } from "react";

export default function Hello({ address }) {
	const [name, setName] = useState("");
	const changeName = () => {
		setName("tuan");
	};
	return (
		<div>
			Hello, {name}, my address is {address}
			<div>
				<button onClick={() => changeName()}>Change</button>
			</div>
		</div>
	);
}
