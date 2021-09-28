import React,{useState} from 'react'
import {useStateValue} from "./StateProvider"
import './Bowlers.css'

function Bat({id,name,logo,points,credits}) {
    const [{batss},dispatch]=useStateValue()
    const[disabled,setDisabled]=useState(true)
  
    const pd=()=>{
        
        dispatch({
            type:'ADD_BATS',
            batss:{
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
        <div className="bowlers" >
        <div className={batss.length>=7 ? "disabled":"bowlers__left"} onClick={pd} disabled={disabled} >
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

export default Bat
