function User(props){
    return(
        <div className="user">
            <img src={props.imgUser} alt="perfil"/>
            <div>
                <p><strong>{props.username}</strong></p>
                <p>{props.user}</p>
            </div>
        </div>
    )
}
  
export default function SidebarUser() {
    // Logic
    const userItem = [
        {
            user: "Catana",
            username: "catanacomics",
            img: "/img/catanacomics 1.png"
        }
    ]

    const userInstagram = userItem.map((user) => (
        <User user={user.user} username={user.username} imgUser={user.img} />
    ));

    // UI
    return (
            [userInstagram]
    );
}
