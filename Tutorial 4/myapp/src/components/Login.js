export default function Login({submitName, submitAddress}) {

	return (
		<form>
			<div>
				<label>
					Name
					<input type="text" />
				</label>
			</div>

			<div>
				<label>
					Address
					<input type="text" />
				</label>
			</div>

            <input type="submit"/>
		</form>
	);
}
