import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre="Carlos Matos"
          pais="VenecoLandia"
          imagen="1"
          cargo="Ingeriero en Polla"
          empresa="Pepe developer"
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />

        <Testimonio
          nombre="Marcos Huaman"
          pais="Peru"
          imagen="2"
          cargo="Ingeriero en cojer viejas"
          empresa="Pepe developer"
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />

        <Testimonio
          nombre="Jose Reyes"
          pais="Chile"
          imagen="3"
          cargo="Ingeriero en Informatica"
          empresa="Pepe developer"
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
