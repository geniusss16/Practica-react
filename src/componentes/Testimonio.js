import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/imagen1.png")}
        alt="foto de carlos matos"/>

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Carlos Matos</p>
        <p className="cargo-testimonio">Ingeniero en dibujar Pollas</p>
        <p className="texto-testimonio">"Dibujo pollas en la tarde y tiempos libres"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
    </div>
  );
}

export default Testimonio;
