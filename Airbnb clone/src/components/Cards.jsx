import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";
import rate from "../assets/rate.png";

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <img src={card1} alt="Card 1" className="card-img"/>
        <img src={rate} alt="Rate" className="rate"/>
        <span>5.0 (6) . Online</span>
        <p>Life Lessons with Katie Zaferes</p>
        <p>From $136 / person</p>
      </div>
      <div className="card">
        <img src={card2} alt="Card 1" className="card-img"/>
        <img src={rate} alt="Rate" className="rate"/>
        <span>5.0 (6) . Online</span>
        <p>Learn Wedding Photography</p>
        <p>From $125 / person</p>
      </div>
      <div className="card">
        <img src={card3} alt="Card 1" className="card-img"/>
        <img src={rate} alt="Rate" className="rate"/>
        <span>5.0 (6) . Online</span>
        <p>Life Lessons with Katie Zaferes</p>
        <p>From $136 / person</p>
      </div>
    </div>
  );
}

export default Cards;
