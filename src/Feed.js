function Icons(props){
    return(
        <div className={props.className}><ion-icon name={props.name}></ion-icon></div>
    )
}

function Posts(props) {
    return (
        <div className="post">
            <div className="head-post">
                <img src={props.imgUser} alt="post"/>
                <div className="post-titulo-usuario">
                    <p>{props.title}</p>
                </div>
                <div className="etc">
                    <Icons name="ellipsis-horizontal" />
                </div>
            </div>
            <div className="img-post">
                <img src={props.imgPost} alt="post"/>
            </div>
            <div className="foot-post">
                <div className="container-acoes">
                    <div className="acoes">
                        <Icons name="heart-outline" className="icon-2" />
                        <Icons name="chatbubble-outline" className="icon-2" />
                        <Icons name="paper-plane-outline" className="icon-2" />
                    </div>
                    <div className="container-save">
                        <Icons name="bookmark-outline" className="icon-2" />
                    </div>
                </div>
            </div>
            <div className="post-likes">
                <img src={props.imgLike} alt="post"/>
                <p> Curtido por <strong>{props.userLiked}</strong> e <strong>outras {props.numberLiked} pessoas</strong> </p>
            </div>
        </div>
    );
}

export default function Feed() {
    // Logic
    const items = [
      {
        title: "meowed",
        imgUser: "/img/meowed1.png",
        imgPost: "/img/gato-telefone 1.png",
        imgLike:"/img/respondeai 1.png",
        liked:"respondeai",
        numberLiked:"101.523"
      },
      {
        title: "barked",
        imgUser: "/img/barked 1.png",
        imgPost: "/img/dog 1.png",
        imgLike:"/img/adorableanimals 1.png",
        liked:"adorable_animals",
        numberLiked:"99.159"
      }
    ];
  
    const posts = items.map((item) => (
      <Posts title={item.title} imgUser={item.imgUser} imgPost={item.imgPost} imgLike={item.imgLike} userLiked={item.liked} numberLiked={item.numberLiked} />
    ));

    // UI
    return (
        <div className="feed">
            {posts}
        </div>  
    );
  }
