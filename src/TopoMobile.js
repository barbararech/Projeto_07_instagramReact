function Icons(props){
    return(
        <div className={props.classlogo}>
            <div className={props.class}><ion-icon name={props.name}></ion-icon></div>
        </div>
    )
}

export default function TopoMobile(){
    return (
        <div className="topo-mobile">
            <div className="container-logos-mobile">
                <Icons name="logo-instagram" class="logo" classlogo="logos"/>

                <div className="logo-escrita"> 
                    <img src="img/logo.png" alt="logo"/> 
                </div>
                
                <Icons name="paper-plane-outline" class="icon" classlogo="container-icones-mobile"/>
            </div>
        </div>
    )
}