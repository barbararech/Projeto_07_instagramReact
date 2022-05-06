function Story(props) {
    return (
        <div className="stories-post">
            <div className="background">
                <img src={props.img} alt="stories"/>
            </div>
            <p> {props.title}</p>
        </div>
    );
}
  
export default function Stories() {
    // Logic
    const items = [
      {
        title: "9gag",
        img: "/img/9gag 1.png",
      },
      {
        title: "meowded",
        img: "/img/meowed1.png",
      },
      {
        title: "barked",
        img: "/img/barked 1.png",
      },
      {
        title: "nathanwpyle...",
        img: "/img/nathanwpylestrangeplanet 1.png",
      },
      {
        title: "wawawiwac...",
        img: "/img/wawawiwacomicsa 1.png",
      },
      {
        title: "respondeai",
        img: "/img/respondeai 1.png",
      },     
      {
        title: "filomoderna",
        img: "/img/filomoderna 1.png",
      },
      {
        title: "memeria...",
        img: "/img/memeriagourmet 1.png",
      }
    ];
  
    const stories = items.map((item) => (
      <Story title={item.title} img={item.img} />
    ));

    // UI
    return (
        <div className="stories">            
            {stories}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>    
        </div>    
    );
  }
