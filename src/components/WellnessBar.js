import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { petActions } from "../store/petSlice";
export default function WellnessBar({ pet }) {
    console.log(pet)

const dirty = useSelector(state => state.pets.dirty)
// const sleepy = useSelector(state => state.pets.pet.sleepy)
// const hungry = useSelector(state => state.pets.pet.hungry)
// const bored = useSelector(state => state.pets.pet.bored)
  const {
    id,
    name,
    sleepy,
    bored,
    alive,
    hungry,
  } = pet;
  console.log(sleepy);
console.log(hungry)


const dispatch = useDispatch()
useEffect(() => {
    let clockInterval = setInterval(() => {
        if (alive){
            if (sleepy < 0 && hungry < 0 ){
                dispatch(petActions.petDead(id))
                alert("Your pet died")
            }
            else if(sleepy < -1 || hungry < -1){
                dispatch(petActions.petDead(id))
                alert("Your pet died")
            }
            else if((bored < 0 && hungry <0) || (bored < 0 && sleepy < 0)){
                dispatch(petActions.petDead(id))
                alert("Your pet died")
            }
            else {
                dispatch(petActions.getSleepy(id))
                dispatch(petActions.getHungry(id))
            }
        }
        else {
            alert(`We are preparing ${name}'s the funeral!`)
            clearInterval(clockInterval)
        }
    }, 15000);    
    return () => {
        clearInterval(clockInterval)
    }
}, [dispatch, sleepy, hungry, bored, dirty, alive,id, name])


  const barConverter = (arg) => {
    switch (arg) {
      case 1:
        return (
          <div style={{ color: "red", fontSize: "20px" }}>
            &#10074;
            <span style={{ color: "gray" }}>&#10074;&#10074;&#10151;</span>
          </div>
        );
      case 2:
        return (
          <div style={{ color: "orange", fontSize: "20px" }}>
            &#10074;&#10074;
            <span style={{ color: "gray" }}>&#10074;&#10151;</span>
          </div>
        );
      case 3:
        return (
          <div style={{ color: "yellow", fontSize: "20px" }}>
            &#10074;&#10074;&#10074;
            <span style={{ color: "gray" }}>&#10151;</span>
          </div>
        );
      case 4:
        return (
          <div style={{ color: "blue", fontSize: "20px" }}>
            &#10074;&#10074;&#10074;&#10151;
          </div>
        );
      default:
        return <div style={{fontSize: "30px"}}>&#9760;</div>;
    }
  };

  const feedHandler = () => {
      console.log(id)
      dispatch(petActions.petFeed(id))
  }

  const playHandler = () => {
    console.log(id)
    dispatch(petActions.petPlay(id))
}

const cleanHandler = () => {
    dispatch(petActions.petClean(id))
}

const sleepHandler = () => {
    dispatch(petActions.petSleep(id))
    dispatch(petActions.getBored(id))
}

  return (
      <div>{alive?  <div
        style={{
          display: "block",
          position: "relative",
          bottom: "30px",
          backgroundColor: "white",
        }}
      >
        <section>
          sleepy: {barConverter(sleepy)}
          <button  onClick={sleepHandler} className="button-n" style={{ width: "60px" }}>
            put to bed
          </button>
        </section>{" "}
        <section>
          hungry: {barConverter(hungry)}
          <button onClick={feedHandler} className="button-n" style={{ width: "60px" }}>
            feed
          </button>
        </section>
        <section>
          bored: {barConverter(bored)}
          <button onClick={playHandler}style={{ width: "60px" }} className="button-n">
            play
          </button>
        </section>
        <section>
          dirty: {barConverter(dirty)}
          <button
            style={{ width: "60px" }}
            className="button-n"
          onClick={cleanHandler}
          >
            shower
          </button>
        </section>
      </div>
      :
      null }
    </div>
  );
}
