import React, { useEffect, useState, } from "react";
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from "./Components/Home"
import './App.css';
import Playerchoose from "./Pages/Playerchoose";
import authaxios from './Authentication/Authaxios'
import Captionselection from './Pages/Captionselection'
import Mysquad from './Pages/Mysquad'
import Mymatches from './Pages/Mymatches'
function App() {
  const [dataa,setData]= useState([])
    useEffect(async()=>{
     const  results= await authaxios.get(`/matches/upcoming-matches`)
      setData(results.data.matches.cricket);
    },[]) 
  return (
    <Router>
    <div className="app">
      <Switch>
          <Route exact path="/">
            <h1>Fantasy Cricket</h1>
            
            <div className="app__home">
            {dataa.map(({id,match_name,t1_short_name,t2_short_name,t1_image,t2_image,match_type})=>(
              <Home 
              className="app__tab"
              key={id} 
              id={id}
              match_name={match_name}
              t1_short_name={t1_short_name}
              t2_short_name={t2_short_name}
              t1_image={t1_image}
              t2_image={t2_image}
              match_type={match_type}
              />
            ))}
            </div>
     
          </Route>
          <Route path="/choose">
            <Playerchoose />
          </Route>
          <Route path="/captionselection">
            <Captionselection />
          </Route>
          <Route path="/squad">
            <Mysquad />
          </Route>
          <Route path="/matches">
            <Mymatches />
          </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
