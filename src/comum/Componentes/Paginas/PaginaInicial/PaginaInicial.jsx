import AnimatedTyping from "../../AnimatedTyping/AnimatedTyping";
import PersistentDrawerLeft from "../../AppBarDrawer/AppBarDrawer";
import ApresentacaoComFoto from "../../ApresentacaoComFoto/ApresentacaoComFoto";
import Footer from "../../Footer/Footer";
import TechStackStylish from "../../Tecnologias/Tecnologias";

const PaginaInicial = () => {
  return (
    <>
      {/* AppBar + Drawer */}
      <PersistentDrawerLeft />

      {/* Espaçamento reduzido logo abaixo do AppBar */}
      <div style={{ marginTop: '16px' }}>
        <AnimatedTyping />
      </div>

      {/* Apresentação com foto com espaçamento responsivo */}
      <div style={{ marginTop: '24px' }}>
        <ApresentacaoComFoto />
      </div>
      {/* Apresentação com foto com espaçamento responsivo */}
      <div style={{ marginTop: '24px' }}>
        <TechStackStylish />
      </div>

      {/* Footer com espaçamento menor do componente anterior */}
      <div style={{ marginTop: '24px' }}>
        <Footer />
      </div>
    </>
  );
};

export default PaginaInicial;
