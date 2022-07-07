import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
export default function Populares() {
  return (
    <section className="terSection container">
      <h2 className="title">Mais populares</h2>

      <div className="terSection_cards">
        <div className="card">
          <div className="imgCard">
            <img src={img1} alt="Imagem de um prato com macarrão" />
          </div>
          <div className="card_txt">
            <h3 className="title">Ramen de Frango</h3>
            <p className="descCard">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="preco">R$ 30</span>
          </div>
        </div>{" "}
        <div className="card">
          <div className="imgCard">
            <img src={img2} alt="Imagem de um prato com macarrão" />
          </div>
          <div className="card_txt">
            <h3 className="title">Ramen Apimentado</h3>
            <p className="descCard">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="preco">R$ 30</span>
          </div>
        </div>{" "}
        <div className="card lastCard">
          <div className="imgCard">
            <img src={img3} alt="Imagem de um prato com macarrão" />
          </div>
          <div className="card_txt">
            <h3 className="title">Ramen Tradicional</h3>
            <p className="descCard">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="preco">R$ 30</span>
          </div>
        </div>
      </div>
    </section>
  );
}
