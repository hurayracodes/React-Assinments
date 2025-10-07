 const galleryItems = [
     {
      id: 1,
      title: "AI Assistant Interface",
      category: "AI/ML Design",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      description: "Conversational AI assistant with emotion recognition",
      iconLists: ["💬", "😊", "🧠", "🔍"],
      link: "#",
    },
     {
      id: 2,
      title: "Space Mission Control",
      category: "Dashboard Design",
      image: "https://pixabay.com/photos/technology-computer-code-javascript-1283624/",
      description: "Mission control dashboard for space exploration",
      iconLists: ["🛰️", "🌎", "👨‍🚀", "🔍"],
      link: "#",
    },
    {
      id: 3,
      title: "Metaverse Gateway",
      category: "3D Design",
      image:
        "https://images.pexels.com/photos/32055930/pexels-photo-32055930.jpeg",
      description: "Portal interface for metaverse experiences",
      iconLists: ["🚪", "🌐", "✨", "🔍"],
      link: "#",
    }
  ];
import './index.css';
function Cards() {
  return (
    <div>
      <h1>Cards</h1>
      {/* <AnotherBox
      firsttitle ={firstCard.title} 
      firstCategory = {firstCard.category}
      firstImage = {firstCard.image}
      firstdes = {firstCard.description}
      /> */}

      {
        galleryItems.map((card) =>{
          // return <AnotherBox CardTitle= {card.title} CardCategory={card.category} CardImage={card.image} CardDes={card.description}/>
          return  <AnotherBox {...card}/>
        })
      }


    </div>
  )
}

export default Cards


function AnotherBox({title, category, image, description}) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{category}</h5>
      <img src={image} alt="" />
      <p>{description}</p>
      
    </div>
  )
}



  