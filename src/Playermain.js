import React from 'react'
import './Display.css'
import Displayplayers from './Displayplayers'
import {useHistory} from 'react-router-dom'

function Displaymatches({match}) {
  
    return (
        <div className="play">
          {match.map(x=>(
              <Displayplayers id={x.id} name={x.name} logo={x.logo} captain={x.captain} vicecaptain={x.vicecaptain} />
          )
            
             )  
        }
           
        </div>
    )
}

export default Displaymatches
