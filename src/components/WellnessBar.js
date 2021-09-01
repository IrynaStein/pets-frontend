import { useState } from "react";
export default function WellnessBar({ pet }) {
    const [dirty, setDirty] = useState(Math.floor(Math.random() * 4) + 1)
  const {
    name,
    breed,
    activity,
    birthday,
    food,
    sleepy,
    bored,
    healthy,
    hungry,
  } = pet;
  console.log(sleepy);
//   const dirty = () => 
  
  const barConverter = (arg) => {
    switch (arg) {
      case 1:
        return <div style={{ color: "red", fontSize: "20px" }}>&#10074;<span style={{color: "gray"}}>&#10074;&#10074;&#10151;</span></div>;
      case 2:
        return <div style={{ color: "orange", fontSize: "20px" }}>&#10074;&#10074;<span style={{color: "gray"}}>&#10074;&#10151;</span></div>;
      case 3:
        return <div style={{ color: "yellow", fontSize: "20px"}}>&#10074;&#10074;&#10074;<span style={{color: "gray"}}>&#10151;</span></div>;
      case 4:
        return (
          <div style={{ color: "blue", fontSize: "20px" }}>&#10074;&#10074;&#10074;&#10151;</div>
        );
      default:
        return <div>&#9904;</div>;
    }
  };

  return (
    <div style={{display: "block", position: "relative", bottom: "30px", backgroundColor: "white"}}>
     <section>sleepy: {barConverter(sleepy)}<button className="button-n" style={{width: "60px"}}>put to bed</button></section> <section>hungry: {barConverter(hungry)}<button className="button-n" style={{width: "60px"}}>feed</button ></section><section>bored: {barConverter(bored)}<button style={{width: "60px"}} className="button-n">play</button></section><section>dirty: {barConverter(dirty)}<button style={{width: "60px"}} className="button-n" onClick={()=>setDirty(4)}>shower</button></section>
    </div>
  );
}
