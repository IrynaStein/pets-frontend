import './GameContainer.css'
import { useParams } from 'react-router-dom'
export default function GameContainer({pets}){

    const params = useParams()
    console.log(params.petName)
console.log(pets)
    // useEffect(() => {
       
    // }, [])

    return (
        <div className="game-container">
        <p>Game Container</p>
        <p>{params.petName}</p>
        </div>
    )
}