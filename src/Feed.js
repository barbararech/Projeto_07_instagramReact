export default function Feed(){
    return (
        <div className="feed">
        {/* <!-- Post 1 --> */}
        <div className="post">
            <div className="head-post">
                <img src="/img/meowed1.png" alt="post"/>
                <div className="post-titulo-usuario">
                    <p>meowed</p>
                </div>
                <div className="etc">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div className="img-post">
                <img src="/img/gato-telefone 1.png" alt="post"/>
            </div>
            <div className="foot-post">
                <div className="container-acoes">
                    <div className="acoes">
                        <div className="icon-2"><ion-icon name="heart-outline"></ion-icon></div>
                        <div className="icon-2"><ion-icon name="chatbubble-outline"></ion-icon></div>
                        <div className="icon-2"><ion-icon name="paper-plane-outline"></ion-icon></div>
                    </div>
                    <div className="container-save">
                        <div className="icon-2"><ion-icon name="bookmark-outline"></ion-icon></div>
                    </div>
                </div>
            </div>
            <div className="post-likes">
                <img src="/img/respondeai 1.png" alt="post"/>
                <p> Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong> </p>
            </div>
        </div>
        {/* <!-- Post 2 --> */}
        <div className="post">
            <div className="head-post">
                <img src="/img/barked 1.png" alt="post"/>
                <div className="post-titulo-usuario">
                    <p>barked</p>
                </div>
                <div className="etc">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div className="img-post">
                <video width="100%"  autoPlay loop muted>
                    <source src="/img/video.mp4" type="video/mp4"/>
                    <source src="/img/video.ogv" type="video/ogg"/>
                    Your browser does not support the video tag.
                </video> 
            </div>
            <div className="foot-post">
                <div className="container-acoes">
                    <div className="acoes">
                        <div className="icon-2"><ion-icon name="heart-outline"></ion-icon></div>
                        <div className="icon-2"><ion-icon name="chatbubble-outline"></ion-icon></div>
                        <div className="icon-2"><ion-icon name="paper-plane-outline"></ion-icon></div>
                    </div>
                    <div className="container-save">
                        <div className="icon-2"><ion-icon name="bookmark-outline"></ion-icon></div>
                    </div>
                </div>
            </div>
            <div className="post-likes">
                <img src="/img/adorableanimals 1.png" alt="post"/>
                <p> Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong> </p>
            </div>
        </div>
        {/* <!-- Post 3 --> */}
        <div className="post">
            <div className="head-post">
                <img src="/img/9gag 1.png" alt="post"/>
                <div className="post-titulo-usuario">
                    <p>9gag</p>
                </div>
                <div className="etc">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div className="img-post">
                <img src="/img/gato-telefone 3.png" alt="post"/>
            </div>
        </div>
    </div>  
    )
}