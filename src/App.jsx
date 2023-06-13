import { subirArchivo } from "./firebase/config";
import React from 'react';

function App() {
  const [gusrdar, setGuardar] = React.useState(null);
  const [imagen, setImagen] = React.useState("");
  const mandar = (e) => {
    setGuardar(e.target.files[0]);

  }
  const subir = async (e) => {
    e.preventDefault();
    try {
      const url = await subirArchivo(gusrdar);
      setImagen(url);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <form className="App" onSubmit={subir}>
        <input type="file" name="" id="" onChange={mandar} />
        <button>subir</button>
      </form>
      <h2>Ultima Imagen Subida</h2>
      <img src={imagen} alt="" />
    </>
  )
}

export default App
