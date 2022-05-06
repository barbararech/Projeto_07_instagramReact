function Icons(props){
    return(
        <div className="icon"><ion-icon name={props.name}></ion-icon></div>
    )
}

export default function BarraInferiorMobile(){
    return (
        <div className="barra-inferior-mobile">
            <Icons name="home" />
            <Icons name="search-outline" />
            <Icons name="add-circle-outline" />
            <Icons name="heart-outline" />
            <Icons name="person-outline" />
        </div>
    )
}