import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { petActions } from "../store/petSlice";
import {updatePet} from '../store/petSlice'

export default function WellnessBar() {
const pet = useSelector(state => state.pets.pet)
const dirty = useSelector(state => state.pets.dirty)

  const {
    id,
    name,
    sleepy,
    healthy,
    bored,
    alive,
    hungry,
  } = pet;
  
  console.log(sleepy);
console.log(hungry)
console.log(healthy)

const dispatch = useDispatch()
useEffect(() => {
    let clockInterval = setInterval(() => {
        if (alive){
            if (sleepy < 0 && hungry < 0 ){
                dispatch(petActions.petDead(id))
                console.log(pet)
                dispatch(updatePet(pet))
                clearInterval(clockInterval)
                // alert("Your pet died")
            }
            else if(sleepy < -1 || hungry < -1){
                dispatch(petActions.petDead(id))
                dispatch(updatePet(pet))
                clearInterval(clockInterval)
                // alert("Your pet died")
            }
            else if((bored < 0 && hungry <0) || (bored < 0 && sleepy < 0)){
                dispatch(petActions.petDead(id))
                dispatch(updatePet(pet))
                clearInterval(clockInterval)
                // alert("Your pet died")
            }
            else {
                dispatch(petActions.getSleepy(id))
                dispatch(petActions.getHungry(id))
                dispatch(petActions.getDirty(id))
                dispatch(petActions.getSick(id))
                dispatch(petActions.getBored(id))
            }
        }
        else {
            alert(`We are preparing ${name}'s the funeral!`)
            dispatch(updatePet(pet))
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
          <div style={{ color: "#D04848", fontSize: "20px" }}>
            &#10074;
            <span style={{ color: "gray" }}>&#10074;&#10074;&#10151;</span>
          </div>
        );
      case 2:
        return (
          <div style={{ color: "#FFE35C", fontSize: "20px" }}>
            &#10074;&#10074;
            <span style={{ color: "gray" }}>&#10074;&#10151;</span>
          </div>
        );
      case 3:
        return (
          <div style={{ color: "#FFA34D", fontSize: "20px" }}>
            &#10074;&#10074;&#10074;
            <span style={{ color: "gray" }}>&#10151;</span>
          </div>
        );
      case 4:
        return (
          <div style={{ color: "#486799", fontSize: "20px" }}>
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

const vetHandler = () => {
   dispatch(petActions.gotoVet(id))
}

const saveGameHandler = () => {
    dispatch(updatePet(pet))
}

  return (
      <div>{alive?  <div className="wellness-bar"
      > {!healthy? 
        <div className="health_container"><img src="https://i.imgur.com/arrUsjs.gif" onClick={vetHandler} alt="medical"/> <button onClick={saveGameHandler}>Save Game</button></div>
      :<div className="health_container"><img src="https://live.staticflickr.com/65535/51425384610_2a4c6065b3_o.png" alt="medical"></img>
      <button onClick={saveGameHandler}>Save Game</button></div> 
      }
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
