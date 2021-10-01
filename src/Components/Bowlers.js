import React from 'react'
import {useStateValue} from "../StateProvider"
import '../Styles/Bowlers.css'

function Bowlers({id,name,logo,points,credits}) {
    const [{bowlerss},dispatch]=useStateValue()
    const pd = ()=>{
        dispatch({
            type:'ADD_BOWLERS',
            bowlerss:{
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
            <div className={bowlerss.length>=7 ? "disabled":"bowlers__left"} onClick={pd}>
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

export default Bowlers
