import React from 'react'
import './Tabs.css'

function Final({id,name,logo,points,credits,captain,vicecaptain}) {
    console.log(id,name,logo,points,credits,captain)    
    return (
        <div className='final'>
                    {captain&&(
                         
                    <div>
                        <h4>Captain</h4>
                        
                       
                    </div>
                    )}
               
                  
                    {vicecaptain&&(
                        <div>
                             <h4>Vice Captain</h4>
                            
                        </div>
                    )}
                    <div>
                       
                    <div>
                      
                    <img src={logo} alt="" width="30" height="30" />
                </div>
                <div>
                    <p>{name}</p>
                </div>
                    </div>
               
              
        </div>
    )
}

export default Final
