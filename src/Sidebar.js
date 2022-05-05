export default function Sidebar(){
    return (
        <div className="coluna2">
            <div className="sidebar">
                {/* <!-- User Sidebar --> */}
                <div className="user">
                    <img src="/img/catanacomics 1.png" alt="perfil"/>
                    <div>
                        <p><strong>catanacomics</strong></p>
                        <p>Catana</p>
                    </div>
                </div>
                
                {/* <!-- Sugestões de Perfis --> */}
                <div className="sugestoes">
                    <div>
                        <p>Sugestões para você</p>
                        <p>Ver tudo</p>
                    </div>
                    {/* <!-- Perfis Sugeridos --> */}
                    <div className="sugestoes-perfis"> 
                        <div className="sugestoes-perfis-info">                  
                            <img src="/img/badvibesmemes 1.png" alt="perfil"/>
                            <div>
                                <p>bad.vibes.memes</p>
                                <p>Segue você</p>
                            </div>
                        </div>
                        <div className="sidebar-seguir">
                            <a href="https://www.instagram.com/"> Seguir </a>
                        </div>                    
                    </div>
                    <div className="sugestoes-perfis"> 
                        <div className="sugestoes-perfis-info">                  
                            <img src="/img/chibirdart 1.png" alt="perfil"/>
                            <div>
                                <p>chilibirdart</p>
                                <p>Segue você</p>
                            </div>
                        </div>
                        <div className="sidebar-seguir">
                            <a href="https://www.instagram.com/"> Seguir </a>
                        </div>                    
                    </div>
                    <div className="sugestoes-perfis"> 
                        <div className="sugestoes-perfis-info">                  
                            <img src="/img/razoesparaacreditar 1.png" alt="perfil"/>
                            <div>
                                <p>razoesparaacreditar</p>
                                <p>Segue você</p>
                            </div>
                        </div>
                        <div className="sidebar-seguir">
                            <a href="https://www.instagram.com/"> Seguir </a>
                        </div>                    
                    </div>                   
                    <div className="sugestoes-perfis"> 
                        <div className="sugestoes-perfis-info">                  
                            <img src="/img/adorableanimals 1.png" alt="perfil"/>
                            <div>
                                <p>adorable_animals</p>
                                <p>Segue você</p>
                            </div>
                        </div>
                        <div className="sidebar-seguir">
                            <a href="https://www.instagram.com/"> Seguir </a>
                        </div>                    
                    </div>                   
                    <div className="sugestoes-perfis"> 
                        <div className="sugestoes-perfis-info">                  
                            <img src="/img/smallcutecats 1.png" alt="perfil"/>
                            <div>
                                <p>bsmallcutecats</p>
                                <p>Segue você</p>
                            </div>
                        </div>
                        <div className="sidebar-seguir">
                            <a href="https://www.instagram.com/"> Seguir </a>
                        </div>                    
                    </div>
                </div>

                {/* <!-- Rodapé --> */}
                <div className="rodape">
                    <p> Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags • 
                        Idioma </p>
                    <p> © 2022 INSTAGRAM DO FACEBOOK</p>
                </div>
            </div>    
        </div>
    )
}