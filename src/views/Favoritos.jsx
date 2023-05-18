
import "../assets/css/galeria.css";
import Heart from "../components/Heart";
import MyContext from "../MyContext";
import { useContext } from "react";

export default function Favoritos() {
  const { fotos, setFotos } = useContext(MyContext);

  const setFavorito = (i) => {
    const index = fotos.findIndex((foto) => foto.id === i);
    fotos[index].favorito = !fotos[index].favorito;
    setFotos([...fotos]);
  }

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-5">
        {fotos.filter(foto => foto.favorito === true).map((foto) => {
          return (
            <div className="foto" style={{ backgroundImage: `url(${foto.src})` }} key={foto.id} onClick={() => setFavorito(foto.id)}>
              <Heart filled={foto.favorito} />
              <p> {foto.desc} </p>
            </div>
          )
        })}

      </div>
    </div>
  );
}