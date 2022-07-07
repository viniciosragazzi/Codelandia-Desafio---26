import Header from "./components/Header";
import topImg from "./assets/topImg.png";
import imgPrato from "./assets/imgSegPrato.png";
import imgPratoG from "./assets/imgSegPratoG.png";
import "./styles/App.css";
import Populares from "./components/Populares";
import Comentarios from "./components/Comentarios";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="topSection container">
          <div className="area_section_principal">
            <div className="area_section_principal_text">
              <h1 className="title">Comida Oriental</h1>
              <p className="descricao">
                A culinária Japonesa é bastante equilibrada, sendo muito rica em
                peixes (ômega 3), vegetais, massas e ingredientes frescos.
              </p>
            </div>
            <a href="#" className="button">
              Cardápio
            </a>
          </div>
          <div className="area_section_img">
            <img src={topImg} alt="Imagem de Sushi com legumes" />
          </div>
        </section>
        <section className="secSection container">
          <div className="secSection_img">
           <picture>
           <source media="(min-width: 768px)" srcSet={imgPratoG} />
           <img src={imgPrato} alt="pessoa segurando um prato" />
           </picture>
          </div>
          <div className="secSection_txt">
            <h2 className="title">Feita de forma Tradicional</h2>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="link">Ler mais sobre o modo de preparo</a>
          </div>
        </section>
        <Populares/>
        <Comentarios/>
        <Localizacao/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
