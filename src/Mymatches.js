import React,{useEffect,useState} from 'react'
import {onSnapshot, collection, getDocs } from "firebase/firestore"; 
import {db} from './firebase';
import Displaymatches from './Displaymatches';
import {useHistory} from 'react-router-dom'

function Mymatches() {
    const history = useHistory()
    const [matchesdata,setMatchesdata]=useState([])
    useEffect(async()=>{
        await onSnapshot(collection(db,'matches'),(snapshot)=>{
             setMatchesdata(snapshot.docs.map(doc=>doc.data().matches))
         })
     },[])
     const handleaddsquad = ()=>{
        history.push('/')
    }
    return (
        <div>
            <h1>My Matches</h1>
             {
               matchesdata.map(match=>(
                   <Displaymatches id={match.id} name={match.match_name} t1_image={match.t1_image} t2_image={match.t2_image}/>
               ))
            } 
            <button className="btn__add" onClick={handleaddsquad}>Add Squads</button>
        </div>
    )
}

export default Mymatches
