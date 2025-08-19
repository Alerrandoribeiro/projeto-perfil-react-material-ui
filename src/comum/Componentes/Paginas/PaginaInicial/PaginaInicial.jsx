import { Box } from "@mui/material"
import AnimatedTyping from "../../AnimatedTyping/AnimatedTyping"
import PersistentDrawerLeft from "../../AppBarDrawer/AppBarDrawer"
import ApresentacaoComFoto from "../../ApresentacaoComFoto/ApresentacaoComFoto"

const PaginaInicial = () => {
    return (
    <>
    
      <PersistentDrawerLeft />
      <AnimatedTyping />
      <ApresentacaoComFoto/>
    </>
    )
}

export default PaginaInicial