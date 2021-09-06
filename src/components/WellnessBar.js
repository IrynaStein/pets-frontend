import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { petActions } from "../store/petSlice";
import { updatePet } from "../store/petSlice";
import WellnessRender from "../functions/WellnessRender";

export default function WellnessBar() {
  const pet = useSelector((state) => state.pets.pet);
  const dirty = useSelector((state) => state.pets.dirty);

  const { id, sleepy, healthy, bored, alive, hungry, name } = pet;

  console.log(sleepy);
  console.log(hungry);
  console.log(healthy);

  const dispatch = useDispatch();
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
  }, [dispatch, sleepy, hungry, bored, dirty, alive,id, name, pet])

  const feedHandler = () => {
    console.log(id);
    dispatch(petActions.petFeed(id));
  };

  const playHandler = () => {
    console.log(id);
    dispatch(petActions.petPlay(id));
  };

  const cleanHandler = () => {
    dispatch(petActions.petClean(id));
  };

  const sleepHandler = () => {
    dispatch(petActions.petSleep(id));
    dispatch(petActions.getBored(id));
  };

  const vetHandler = () => {
    dispatch(petActions.gotoVet(id));
  };

  const saveGameHandler = () => {
    dispatch(updatePet(pet));
  };

  return (
    <>
      {alive ? (
        <div className="wellness-bar">
          {" "}
          {!healthy ? (
            <div className="health_container">
              <img
                src="https://i.imgur.com/arrUsjs.gif"
                onClick={vetHandler}
                alt="medical"
              />{" "}
              <button onClick={saveGameHandler} className="button-green">
                Save Game
              </button>
            </div>
          ) : (
            <div className="health_container">
              <img
                src="https://live.staticflickr.com/65535/51425384610_2a4c6065b3_o.png"
                alt="medical"
              ></img>
              <button onClick={saveGameHandler} className="button-green">
                Save Game
              </button>
            </div>
          )}
          <section>
            sleepy: <WellnessRender arg={sleepy} />
            <button
              onClick={sleepHandler}
              className="button-green"
              style={{ width: "60px" }}
            >
              put to bed
            </button>
          </section>{" "}
          <section>
            hungry: <WellnessRender arg={hungry} />
            <button
              onClick={feedHandler}
              className="button-green"
              style={{ width: "60px" }}
            >
              feed
            </button>
          </section>
          <section>
            bored: <WellnessRender arg={bored} />
            <button
              onClick={playHandler}
              style={{ width: "60px" }}
              className="button-green"
            >
              play
            </button>
          </section>
          <section>
            dirty: <WellnessRender arg={dirty} />
            <button
              style={{ width: "60px" }}
              className="button-green"
              onClick={cleanHandler}
            >
              shower
            </button>
          </section>
        </div>
      ) : <div className="pop-up">Your pet passed away</div>}
    </>
  );
}
