function Icons(props){
    return(
        <div className={props.class}><ion-icon name={props.name}></ion-icon></div>
    )
}

export default function Topo(){
    return (
        <div className="topo">
            <div className="container-logos">
                <div className="logos">
                    <Icons name="logo-instagram" class="logo"/>
                    <div className="borda-vertical"></div>
                    <div className="logo-escrita"> <img src="img/logo.png" alt="logo"/></div>
                </div>

                <div className="busca">Pesquisar</div> 

                <div className="container-icones">
                    <Icons name="paper-plane-outline" class="icon" />
                    <Icons name="compass-outline" class="icon"/>
                    <Icons name="heart-outline" class="icon" />
                    <Icons name="person-outline" class="icon"/>
                </div>
            </div>
        </div>  
    )
}