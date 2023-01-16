function NutritiousFoodComponent({ label, category, nutrients, image }) {
	const newNutrients = nutrients;

	return (
		<div>
			<div className="container">
				<h2>{label}</h2>
			</div>
			<div className="container">
				<p>{category}</p>
			</div>
			<div className="container">
				<img src={image} alt="food" />
			</div>
			<table>
				<tbody>
					<tr>
						{Object.keys(newNutrients).map((key, index) => (
							<th key={index}>{key}</th>
						))}
					</tr>
					<tr>
						{Object.values(newNutrients).map((val, index) => (
							<td key={index}>{val.toFixed()}</td>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default NutritiousFoodComponent;
