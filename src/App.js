import BarraInferiorMobile from "./BarraInferiorMobile";
import TopoMobile from "./TopoMobile";
import Topo from "./Topo";
import Conteudo from "./Conteudo";

export default function App(){
    return (
        <div>
            <Topo />
            <TopoMobile />
            <Conteudo />
            <BarraInferiorMobile />
        </div>
    )
}