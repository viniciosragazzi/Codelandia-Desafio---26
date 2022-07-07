import React from "react";
import mapa from "../assets/mapa.png";
import mapaP from "../assets/mapaP.png";
import { MapPin, MagnifyingGlass } from "phosphor-react";
export default function Localizacao() {
  return (
    <section className="quinSection container">
      <h2 className="title">Localização</h2>
      <div className="quinSection_mapa">
        <picture>
          <source media="(max-width:480px)" srcSet={mapaP} />
          <img src={mapa} alt="Cute cat sitting on the porch" />
        </picture>
      </div>
      <div className="quinSection_input">
        <MapPin size={34} color="#da2535" />
        <input type="text" placeholder="Localização para entrega" />
        <div className="searchIconArea">
          <MagnifyingGlass className="searchIcon" size={20} weight="bold" />
        </div>
      </div>
    </section>
  );
}
