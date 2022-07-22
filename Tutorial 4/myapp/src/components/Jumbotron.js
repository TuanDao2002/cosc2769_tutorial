import { useEffect, useState } from "react";

export default function Jumbotron({ address }) {
	const [stateAddress, setStateAddress] = useState("");
	const [count, setCount] = useState(0)

	const displayAddress = () => {
		setStateAddress(address);
	};

	const increase = () => {
		setCount(count + 1)
	}

	const decrease = () => {
		count > 0 && setCount(count - 1);
	}

	const exponential = () => {
		setCount(count * 2)
	}

	useEffect(() => {
		document.title = `You have clicked ${count}`
	})
	
	return (
		<div>
			<h1>This is your info:</h1>
			<p>Your address is {stateAddress}</p>
			<p>You have clicked {count}</p>
			<button onClick={() => increase()}>Increase</button>
			<button onClick={() => decrease()}>Decrease</button>
			<button onClick={() => exponential()}>Exponential</button>
			<button onClick={() => displayAddress()}>Display address</button>
		</div>
	);
}
