import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";
import rate from "../assets/rate.png";

function Cards() {
  return (
    <div className="cards">
      <Card img={card1}/>
      <Card img={card2}/>
      <Card img={card3}/>
    </div>
  );
}
function Card(props){
  return(
    <div className="card">
        <img src={props.img} alt="Card 1" className="card-img"/>
        <img src={rate} alt="Rate" className="rate"/>
        <span>5.0 (6) . Online</span>
        <p>Life Lessons with Katie Zaferes</p>
        <p>From $136 / person</p>
      </div>
      
  )
}

export default Cards;
