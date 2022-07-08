import { Star } from "phosphor-react";
import React from "react"; // eslint-disable-line no-unused-vars
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
export default function Comentarios() {
  return (
    <section className="quarSection container">
      <h2 className="title">Comentários</h2>
      <div className="quarSection_cards">
        <div className="card">
          <div className="card_img">
            <img src={profile1} alt="Mulher sorrindo com uma blusa florida" />
          </div>
          <div className="card_txt">
            <h3 className="card_txt_title">Daniele Almeida</h3>
            <p className="card_txt_desc">
              Ótimo serviço! Encantada com a qualidade dos pratos.
            </p> 
          </div>
          <div className="card_stars">
            <Star  weight="fill" color="#da2535" />
            <Star  weight="fill" color="#da2535" />
            <Star  weight="fill" color="#da2535" />
            <Star  weight="fill" color="#da2535" />
            <Star  weight="fill" color="#da2535" />
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <img src={profile2} alt="Homem sério com uma grande barba" />
          </div>
          <div className="card_txt">
            <h3 className="card_txt_title">Ricardo França</h3>
            <p className="card_txt_desc">
              Não é apenas a comida excelente, o serviço torna a experiência
              especial.
            </p>
          </div>
          <div className="card_stars">
            <Star  weight="fill" color="#da2535" />
            <Star  weight="fill" color="#da2535" />
            <Star  weight="fill" color="#da2535" />
            <Star  weight="fill" color="#da2535" />
            <Star  weight="fill" color="#da2535" />
          </div>
        </div>
      </div>
    </section>
  );
}
