import Stories from "./Stories";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function Conteudo(){
    return (
        <div className="conteudo">
            <div className="coluna1">
                <Stories />
                <Feed />
            </div>
            <Sidebar />
        </div>
    )
}