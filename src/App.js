import { useEffect, useState } from 'react';
import './App.css';
import video from './apple.mp4';
import NutritiousFoodComponent from './NutritiousFoodComponent';
import iconSearch from './search-interface-symbol.png';

function App() {
	const MY_ID = 'f4435f81';
	const MY_KEY = '10938632e39679d9178819f9790cb68c';

	const [mySerch, setMySerch] = useState('');
	const [listofFood, setListOfFood] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('egg');

	useEffect(() => {
		const getAdvace = async () => {
			const responce = await fetch(
				`https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=${MY_ID}&app_key=${MY_KEY}&ingr=${wordSubmitted}`
			);
			const data = await responce.json();
      setListOfFood(data.hints)
		};
		getAdvace();
	}, [wordSubmitted]);

	const searchMyIngridient = (e) => {
		setMySerch(e.target.value);
	};

  const finalSerch = (e) => {
		e.preventDefault();
		setWordSubmitted(mySerch);
	};

	return (
		<div className="App">
			<div className="container">
				<video autoPlay muted loop>
					<source src={video} type="video/mp4" />
				</video>
				<h1>Nutritious Food </h1>
			</div>
			<div className="container">
				<form onSubmit={finalSerch}>
					<input
						className="search"
						placeholder="Enter an ingridient"
						onChange={searchMyIngridient}
						value={mySerch}
					></input>
				</form>
				<button onClick={finalSerch}>
					<img className="icon" src={iconSearch} alt="icon" width="40px" />
				</button>
			</div>
			<div>
				{listofFood.map((element) => (
					<NutritiousFoodComponent 
          key={element.food.foodId}
          label = {element.food.label}
          category={element.food.category}
          nutrients={element.food.nutrients}
          image={element.food.image}
          />
				))}
			</div>
		</div>
	);
}

export default App;
