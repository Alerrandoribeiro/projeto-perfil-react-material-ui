import { Box } from "@mui/material"
import AnimatedTyping from "../../AnimatedTyping/AnimatedTyping"
import PersistentDrawerLeft from "../../AppBarDrawer/AppBarDrawer"
import ApresentacaoComFoto from "../../ApresentacaoComFoto/ApresentacaoComFoto"
import Footer from "../../Footer/Footer"

const PaginaInicial = () => {
    return (
    <>
     
      <PersistentDrawerLeft />
      <AnimatedTyping />
      <ApresentacaoComFoto/>
      <Footer/>
    </>
    )
}

export default PaginaInicial