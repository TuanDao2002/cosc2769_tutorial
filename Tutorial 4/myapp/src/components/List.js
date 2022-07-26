import { useEffect, useState } from "react";

export default function List() {
	const [data, setData] = useState([]);

	//use fetch() to receive data from api

	useEffect(() => {
		fetch("https://api.covidtracking.com/v1/us/daily.json")
			.then((res) => res.json())
			.then((json) => {
				setData(json);
			});
	}, []);

	return (
		<table>
			<tbody>
				<tr>
                    <td>Date</td>
					<td>States</td>
					<td>Number of hospitalized cases</td>
				</tr>

				{data.map((item) => (
					<tr>
                        <td>{new Date(item.dateChecked).toISOString().split('T')[0]}</td>
						<td>{item.states}</td>
						<td>{item.hospitalizedCurrently}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
