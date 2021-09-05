import './Cemetery.css'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {fetchCemetery} from '../store/gameSlice'
export default function Cemetery(){

    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(fetchCemetery())
    }, [])

    return (
        <div className="cemetery-container">
        <h1>Cemetery</h1>
        </div>
    )
}