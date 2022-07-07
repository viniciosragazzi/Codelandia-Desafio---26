import React, {useState} from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header  className={`container ${isOpen ? 'menuOpen' : null} `}>
      <a href="#" className="logo">
        Food<span>JP</span>
      </a>
      <div className="burgerBtn" onClick={()=>setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="deslise">
        
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Cardápio</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
        <a href="#" className="button">
          Entrar
        </a>
      </nav>
    </header>
  );
}
