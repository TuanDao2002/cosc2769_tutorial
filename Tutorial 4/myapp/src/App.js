import "./App.css";
import Jumbotron from "./components/Jumbotron";
import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login"

function App() {
	const [name, setName] = useState("")
	const [address, setAddress] = useState("")
	return (
		<div className="App">
			{/* <Header name="Tuan" location="HCM"/> */}
			<Jumbotron address="Binh Tan, Ho Chi Minh City"/>
			<Login submitName={setName} submitAddress={setAddress}/>
		</div>
	);
}

export default App;
