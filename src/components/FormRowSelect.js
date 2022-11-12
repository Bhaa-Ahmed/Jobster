const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
	return (
		<div className="form-row">
			<label htmlFor={name} className="form-label">
				{labelText || name}
			</label>
			<select
				name={name}
				id={name}
				className="form-select"
				value={value}
				onChange={handleChange}
			>
				{list.map((itemValue, idx) => {
					return (
						<option value={itemValue} key={idx}>
							{itemValue}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default FormRowSelect;
