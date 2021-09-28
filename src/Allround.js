import React,{useState} from 'react'
import {useStateValue} from './StateProvider'
import './Bowlers.css'

function Allround({id,name,logo,points,credits}) {
    const [{allrounderss},dispatch]=useStateValue()
    const pd=()=>{
        dispatch({
            type:'ADD_ALLROUNDERS',
            allrounderss:{
                id:id,
                name:name,
                logo:logo,
                points:points,
                credits:credits
            },
        })
        dispatch({
            type:'ADD_PLAYERS',
            playerdetails:{
                id:id,
                name:name,
                logo:logo,
                points:points,
                credits:credits
            },
        })
    }
    return (
        <div className="bowlers">
        <div className={allrounderss.length>=4 ? "disabled":"bowlers__left"} onClick={pd}>
            <div>
            <img src={logo} alt="" width="20" height="20"/>
            </div>
            <div>
                <p>{name}</p>
            </div>
            <div>
                <p>{points}</p>
            </div>
            <div>
                <p>{credits}</p>
            </div>
        </div>
    </div>
    )
}

export default Allround
