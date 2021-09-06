import './Cemetery.css'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {fetchCemetery} from '../store/gameSlice'
export default function Cemetery(){

    const dispatch = useDispatch()
    const passedPets = useSelector(state => state.game.cemetery)

    useEffect(() => {
       dispatch(fetchCemetery())
    }, [dispatch])

    return (
        <div className="cemetery-container">
        <h1>Cemetery</h1>
        <div className="tombstone-container">
        {passedPets.map((pet) => <div className="tombstone" key={pet.id}><img src="https://live.staticflickr.com/65535/51426137870_96aedb2582_o.png" alt="tombsotone"/><div className="engraving">{pet.name}</div></div>)}
        </div>
        </div>
    )
}

