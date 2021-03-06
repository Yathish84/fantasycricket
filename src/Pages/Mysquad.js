import React,{useEffect,useState} from 'react'
import {useStateValue} from "../StateProvider"
import '../Styles/Tabs.css'
import {onSnapshot, collection } from "firebase/firestore"; 
import {db} from '../firebase';
import Playermain from '../Components/Playermain';
import {useHistory} from 'react-router-dom'


function Mysquad() {
    const[{players},dispatch]=useStateValue()
    const [firebasedata,setFirebasedata]=useState([])
    const [matchesdata,setMatchesdata]=useState([])
    
    useEffect(()=>{
        onSnapshot(collection(db,'players'),(snapshot)=>{
            setFirebasedata(snapshot.docs.map(doc=>doc.data().players))
        })
    },[])
    useEffect(async()=>{
       await onSnapshot(collection(db,'matches'),(snapshot)=>{
            setMatchesdata(snapshot.docs.map(doc=>doc.data().matches))
        })
    },[])
    const history = useHistory()
    const handleaddsquad=()=>{
        history.push('/')
    }
    const handlematches = ()=>{
        history.push('/matches')
    }
    players.map((x)=>{
        console.log(x)
    })
  
    return (
        <div>
            <h1 className="mysquad">My Squads {firebasedata.length}-10</h1>
            <h4 className="mysquad" >Players</h4>
            {
               firebasedata.map(match=>(
                   <Playermain match={match} />
               ))
            } 
            <div className="play__button">
            <button className="btn__add" onClick={handleaddsquad}>Add Squads</button>
            <button className="btn__matches" onClick={handlematches}>Preview Matches</button>    
        </div> 
        </div>
    )
}

export default Mysquad
