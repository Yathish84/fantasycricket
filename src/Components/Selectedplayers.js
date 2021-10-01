import React,{useState} from 'react'
import '../Styles/Display.css'
import {useStateValue} from "../StateProvider"

function Batsmanlist({id,name,logo,points,credits}) {
    const[{captains},dispatch]=useStateValue()
    const [captain,setCaptain] =useState(false);
    const[vicecaptain,setVicecaptain]=useState(false)
   
    const handlecap=(e)=>{
        const t = e.target.checked
        setCaptain(t)
        setVicecaptain(false)
        
        dispatch({
            type:'ADD_CAPTAINS',
            captains:{
                id,
                name,
                logo,
                captain:t,
                points,
                credits
            }
       })
       dispatch({
        type:'ADD_PLAYERS',
        playerdetails:{
            id:id,
            name:name,
            logo:logo,
            captain:t,
            points:points,
            credits:credits
        },
    })
    }
    const handlevice=(e)=>{
        const t = e.target.checked
        setVicecaptain(t)
        setCaptain(false)
       dispatch({
            type:'ADD_CAPTAINS',
            captains:{
                id,
                name,
                logo,
                points,
                vicecaptain:t,
                credits

            }
       })
       dispatch({
        type:'ADD_PLAYERS',
        playerdetails:{ 
            id:id,
            name:name,
            logo:logo,
            points:points,
            vicecaptain:t,
            credits:credits
        },
    })
    }
   
    return (
        <div className="outer__div" >
         <div className={captains.length>=2 ? "disabled":"inner__div"}  >
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
            <div className="check">
                <div className="check__in">
                <label for="captain">c</label> 
                <input type="checkbox" name="captain" id="" onChange={handlecap} checked={captain} />
                </div>
                <div className="check__in">

                <label for="captain">vc</label> 
                <input type="checkbox" name="" id="" onChange={handlevice} checked={vicecaptain}/>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Batsmanlist
