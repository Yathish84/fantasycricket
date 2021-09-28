import React,{useEffect,useState} from 'react'
import './Home.css'
import { useHistory} from 'react-router-dom';
import authaxios from './Authaxios'
import {useStateValue} from "./StateProvider"

function Home({id,match_name,t1_short_name,t2_short_name,t1_image,t2_image,match_type}) {
    const history = useHistory()
    const[{matches},dispatch]=useStateValue();
   
    const handleHomeClick=()=>{
       dispatch({
           type:'ADD_MATCHES',
           matches:{
               id:id,
               match_name:match_name,
               t1_short_name:t1_short_name,
               t2_short_name:t2_short_name,
               t1_image:t1_image,
               t2_image:t2_image
           }
       })
       
       history.push("/choose")

    } 
   
   
       
    return (
       
        <div className="home" onClick={handleHomeClick}>
           <div className="home__top">
               <div className="home__image">
                   <img className="home__img" src={t1_image} alt="" />
                   <p>{t1_short_name}</p>
               </div>
               <div className="home__image">
                   <img className="home__img" src={t2_image} alt="" lazyLoading/>
                   <p>{t2_short_name}</p>
               </div>
           </div>
           <div className="home__bottom">
               <p>{match_name}</p>
                <p>{match_type}</p>
           </div>
            
        </div>
    )
}


export default Home
