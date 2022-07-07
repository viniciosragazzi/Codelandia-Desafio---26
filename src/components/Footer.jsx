import React from "react";

export default function Footer() {
  return (
    <footer className="container">
      <a href="#" className="logo">
        Food<span>JP</span>
      </a>
      <div className="footerItens">
        <div className="footerItem">
          <span className="titleItem">Contato</span>
          <a className="info">+55 21 9999-9999</a>
          <a className="info">email@gmail.com</a>
        </div>
        <div className="footerItem">
          <span className="titleItem">Serviços</span>
          <a className="info">Entrega</a>
          <a className="info">Retirada</a>
        </div>
        <div className="footerItem">
          <span className="titleItem">Sobre nós</span>
          <a className="info">Menu</a>
          <a className="info">Valores</a>
          <a className="info">Pagina principal</a>
        </div>
      </div>
    </footer>
  );
}
