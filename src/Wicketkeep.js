import React from 'react'
import {useStateValue} from "./StateProvider"
import './Bowlers.css'

function Wicketkeep({id,name,logo,points,credits}) {
    const [{wicketkeeperss},dispatch]=useStateValue()
    const pd = ()=>{
        dispatch({
            type:'ADD_WICKETKEEPERS',
            wicketkeeperss:{
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
        <div className={wicketkeeperss.length>=5 ? "disabled":"bowlers__left"} onClick={pd}>
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

export default Wicketkeep
