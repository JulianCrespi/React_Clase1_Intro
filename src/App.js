import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

// Habilita bootstrap completo para todos los componentes
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const data = [
		{
			title: "Mr Rick v0",
			desc: "Un paseo de aquellos",
			photo:
				"https://www-saladepeligro-com.exactdn.com/wp-content/uploads/2020/04/cuarta_temporada_rick_morty-1000x489-1-640x360.jpg",
		},
		{
			title: "Mr Rick v1",
			desc: "Un paseo de aquellos",
			photo:
				"https://www-saladepeligro-com.exactdn.com/wp-content/uploads/2020/04/cuarta_temporada_rick_morty-1000x489-1-640x360.jpg",
		},
		{
			title: "Mr Rick v2",
			desc: "Un paseo de aquellos",
			photo:
				"https://www-saladepeligro-com.exactdn.com/wp-content/uploads/2020/04/cuarta_temporada_rick_morty-1000x489-1-640x360.jpg",
		},
		{
			title: "Mr Rick v3",
			desc: "Un paseo de aquellos",
			photo:
				"https://www-saladepeligro-com.exactdn.com/wp-content/uploads/2020/04/cuarta_temporada_rick_morty-1000x489-1-640x360.jpg",
		},
		{
			title: "Mr Rick v4",
			desc: "Un paseo de aquellos",
			photo:
				"https://www-saladepeligro-com.exactdn.com/wp-content/uploads/2020/04/cuarta_temporada_rick_morty-1000x489-1-640x360.jpg",
		},
		{
			title: "Mr Rick v5",
			desc: "Un paseo de aquellos",
			photo:
				"https://www-saladepeligro-com.exactdn.com/wp-content/uploads/2020/04/cuarta_temporada_rick_morty-1000x489-1-640x360.jpg",
		},
	];
	return (
		<>
			<div className="App container">
				<Header titulo="Galería de Imágenes con React" />
				<div className="row">
					{data.map((item) => (
						<Card
							key={item.title}
							title={item.title}
							desc={item.desc}
							photo={item.photo}
						/>
					))}
				</div>
			</div>
			<Footer desc="Soy la Descripcion Deluxe" />
		</>
	);
}

export default App;
