import BarraInferiorMobile from "./BarraInferiorMobile";
import TopoMobile from "./TopoMobile";
import Topo from "./Topo";
import Conteudo from "./Conteudo";
// import Sidebar from "./Sidebar";


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