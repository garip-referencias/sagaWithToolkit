import "./App.css";
// <6>
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCatsFetch} from "./catState";
// </6>

function App() {
  // <6>
  // En la siguiente linea se llama al reducer "cats" y luego a su propiedad tambien llamada "cats"
  const cats = useSelector((state) => state.cats.cats); // OJO NO envolver state.cats.cats en {}
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch()); // OJO NO OLvidar poner los () de la funcion getCatsFetch o sea getCatsFetch()
  }, [dispatch]);
  console.log(cats);
  // </6>

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure
      </p>
      <hr />
      <div className="Gallery">
        {cats.map(cat => (
          <div key={cat.id} className="row">
            <div className="column column-left"></div>
            {/* <img alt={cat.name} src={cat.image.url} width="200" height="300" /> */}
            <div className="column column-right"></div>
            <h2>{cat.name}</h2>
            <h5>Temperament: {cat.temperament}</h5>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
