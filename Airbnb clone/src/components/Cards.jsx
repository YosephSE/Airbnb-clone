import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";
import rate from "../assets/rate.png";

function Cards() {
  return (
    <div className="cards">
      <Card
        img={card1}
        span="5.0 (6) . Online"
        text="Life Lessons with Katie Zaferes"
        price="From $136 / person"
      />
      <Card
        img={card2}
        span="5.0 (6) . Online"
        text="Learn Wedding Photography"
        price="From $125 / person"
      />
      <Card
        img={card3}
        span="5.0 (6) . Norway"
        text="Group Mountain Biking"
        price="From $50 / person"
      />
    </div>
  );
}
function Card({ img, span, text, price }) {
  return (
    <div className="card">
      <img src={img} alt="Card 1" className="card-img" />
      <img src={rate} alt="Rate" className="rate" />
      <span>{span}</span>
      <p>{text}</p>
      <p>{price}</p>
    </div>
  );
}

export default Cards;
