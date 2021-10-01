import React from 'react'
import {useStateValue} from "../StateProvider"
import Selectedplayers from '../Components/Selectedplayers'
import '../Styles/Tabs.css'
import { useHistory} from 'react-router-dom';
import {db} from '../firebase';
import { collection, addDoc } from "firebase/firestore";

function Captionselection() {
    const[{batss,bowlerss,wicketkeeperss,allrounderss,players,captains},dispatch]= useStateValue()
    const history = useHistory()
    const handlepreview=()=>{
        history.push('./squad')
       const docRef =  addDoc(collection(db,"players"),{
            players
        })
        console.log("Document written with ID: ", docRef)
    }


    return (
        <div className="captionselection">
            <h4>Select 1 captain and 1 Vicecaptain </h4>
            <div>
                <h3>Selected Batsmen</h3>
                {batss.map(x=>(
                    <Selectedplayers id={x.id} name={x.name} credits={x.credits} points={x.points} logo={x.logo}/>
                ))}
            </div>
            <div>
                <h3>Selected wicketkeepers</h3>
                {wicketkeeperss.map(x=>(
                    <Selectedplayers id={x.id} name={x.name} credits={x.credits} points={x.points} logo={x.logo}/>
                ))}
            </div>
            <div>
                <h3>Selected Allrounders</h3>
                {allrounderss.map(x=>(
                    <Selectedplayers id={x.id} name={x.name} credits={x.credits} points={x.points} logo={x.logo}/>
                ))}
            </div>
            <div>
                <h3>Selected Bowlers</h3>
                {bowlerss.map(x=>(
                    <Selectedplayers id={x.id} name={x.name} credits={x.credits} points={x.points} logo={x.logo}/>
                ))}
            </div>
            <div>
                <button className={captains.length===0 ? 'btn__disabled': 'btn'} onClick={handlepreview}>Preview Squad</button>
            </div>
        </div>
    )
}

export default Captionselection
