import React,{useState,useEffect} from 'react'
import '../Styles/Tabs.css'
import {useStateValue} from "../StateProvider"
import { useHistory} from 'react-router-dom';
import authaxios from '../Authentication/Authaxios'
import Bowlers from '../Components/Bowlers'
import Wicketkeep from '../Components/Wicketkeep'
import Allround from '../Components/Allround'
import Bat from '../Components/Bat'
import {db} from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import {creditscalculator} from '../PlayerSlices/Reducer'


function Playerchoose() {
    const history = useHistory()
    const[{matches,players,batss,bowlerss,wicketkeeperss,allrounderss},dispatch]= useStateValue()
    const [playerdetails,setPlayer]=useState([])
    const [bowlers,setBowler]=useState([])
    const [batsmans,setBatsman]=useState([])
    const [allrounders,setAllrounder]=useState([])
    const [wicketkeepers,setWicketkeeper]=useState([])
    const [toggleState, setToggleState] = useState(1);
  
   

  const toggleTab = (index) => {
    setToggleState(index);
  }
   
    useEffect(async()=>{
        const  res = await authaxios.get(`/squad/players?match_id=${matches.id}`)
        setPlayer(res.data)
        const bowler = res.data.filter(x=>x.role ==="Bowler")
        setBowler(bowler)
        const batsman = res.data.filter(x=>x.role ==="Batsman")
        setBatsman(batsman)
        const allrounder = res.data.filter(x=>x.role ==="All-Rounder")
        setAllrounder(allrounder)
        const wicketkeeper = res.data.filter(x=>x.role ==="Wicket-Keeper")
        setWicketkeeper(wicketkeeper)

    },[matches])
    
   
    const handlenext=()=>{
        history.push('./captionselection')
        const docRef =  addDoc(collection(db,"matches"),{
          matches
      })
    }
   
    return (
        <div className="choose">
            <h2>Pick Squad</h2>

            <div className="container">
            <div className="bloc-tabs">
            <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          BAT
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          WK
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          AR
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          BOWL
        </button>
        
      </div>

      <div className={players.length>=11 ? "disabled":"content-tabs"}>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h3>Pick {batss.length}-7 Batsman</h3>
          
          {batsmans.map((x)=>(
              <Bat id={x.id} name={x.name} logo={x.team_logo} points={x.event_total_points} credits={x.event_player_credit} />
          )
             
          )}
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h3>Pick {wicketkeeperss.length}-5 Wicket Keepers</h3>
          {wicketkeepers.map((x)=>(
              <Wicketkeep id={x.id} name={x.name} logo={x.team_logo} points={x.event_total_points} credits={x.event_player_credit}  />
          ))
          }
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h3>Pick {allrounderss.length}-4 All Rounders</h3>
          
          {allrounders.map((x)=>(
              <Allround id={x.id} name={x.name} logo={x.team_logo} points={x.event_total_points} credits={x.event_player_credit}  />
          ))
          }
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h3>Pick {bowlerss.length}-7 Bowlers</h3>
          
          {bowlers.map((x)=>(
              <Bowlers id={x.id} name={x.name} logo={x.team_logo} points={x.event_total_points} credits={x.event_player_credit} />
          )
             
          )}
        </div>
      </div>
    </div>
        <div className="playerchoose__btm">
          <div >
            <h4>{players.length}/11</h4>
            <p>Players</p>
          </div>
          <div>
            <h4>{creditscalculator(players)<=0 ? <h4>0</h4> : creditscalculator(players)}</h4>
            <p>Cr Left</p>
          </div>
          <div>
            <button className={(players.length===0 || players.length>11 || creditscalculator(players)<=0) ? 'btn__disabled' : 'btn' } onClick={handlenext} disabled={players.length===0}> Next </button>
          </div>
           
            
           
        </div>
        </div>
    )
}

export default Playerchoose
