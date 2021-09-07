import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { petActions } from "../store/petSlice";
import { updatePet } from "../store/petSlice";
import WellnessRender from "../functions/WellnessRender";

export default function WellnessBar() {
  const pet = useSelector((state) => state.pets.pet);
  const dirty = useSelector((state) => state.pets.dirty);
  const gamePaused = useSelector((state) => state.game.gamePaused);
  const { id, sleepy, healthy, bored, alive, hungry, name } = pet;

  const dispatch = useDispatch();
  useEffect(() => {
    let clockInterval;
    if (gamePaused) {
      clearInterval(clockInterval);
    }
    else {
      if (alive && healthy) {
        clockInterval = setInterval(() => {
          if (sleepy < 0 && hungry < 0) {
            dispatch(petActions.petDead(id));
            clearInterval(clockInterval);
       
          } else if (sleepy < -1 || hungry < -1) {
            dispatch(petActions.petDead(id));
            clearInterval(clockInterval);
          } else if ((bored < 0 && hungry < 0) || (bored < 0 && sleepy < 0)) {
            dispatch(petActions.petDead(id));
            clearInterval(clockInterval);
          } else {
            dispatch(petActions.getSleepy(id));
            dispatch(petActions.getHungry(id));
            dispatch(petActions.getDirty(id));
            dispatch(petActions.getBored(id));
            dispatch(petActions.getSick(id));
          }
        }, 15000);
      } else if (alive && !healthy){
        clearInterval(clockInterval);
        dispatch(petActions.getSleepy(id));
        dispatch(petActions.getHungry(id));
        dispatch(petActions.getDirty(id));
        dispatch(petActions.getBored(id))
      }
      else {
        clearInterval(clockInterval);
        //   alert(`We are preparing ${name}'s the funeral!`) 
        // debugger;
        dispatch(updatePet(pet));
      }
    }
    return () => {
      clearInterval(clockInterval);
    };
  }, [dispatch, sleepy, hungry, bored, dirty, alive, id, name, pet, gamePaused]);

  const feedHandler = () => {
    dispatch(petActions.petFeed(id));
  };

  const playHandler = () => {
    dispatch(petActions.petPlay(id));
  };

  const cleanHandler = () => {
    dispatch(petActions.petClean(id));
  };

  const sleepHandler = () => {
      console.log(`pet:`, pet)
    dispatch(petActions.petSleep(id));
    dispatch(petActions.getBored(id));
  };

  const vetHandler = () => {
    dispatch(petActions.gotoVet(id));
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
            </div>
          ) : (
            <div className="health_container">
              <img
                src="https://live.staticflickr.com/65535/51425384610_2a4c6065b3_o.png"
                alt="medical"
              ></img>
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
      ) : (
        <div className="pop-up">Your pet passed away</div>
      )}
    </>
  );
}
