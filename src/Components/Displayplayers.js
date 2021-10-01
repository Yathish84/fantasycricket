import React from 'react'
import '../Styles/Display.css'

function Displayplayers({id,name,logo,captain,vicecaptain}) {
    return (
        <div className="playerss">
            <div>
            {captain&&(
                <div>
                    <h3>captain</h3>
                </div>
            )}
             {vicecaptain&&(
                <div>
                    <h3>vicecaptain</h3>
                </div>
            )}
            </div>
            
            <div>
                <img src={logo} alt="" width="30" height="30"/>
            </div>
            <div>
                <h5>{name}</h5>
            </div>
        </div>
    )
}

export default Displayplayers
