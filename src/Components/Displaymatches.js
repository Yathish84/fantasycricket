import React from 'react'

function Displaymatches({id,name,t1_image,t2_image}) {
    return (
        <div className="matches">
            <div>
                <img src={t1_image} alt="" width="30" height="30"/>
            </div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <img src={t2_image} alt="" width="30" height="30"/>
            </div>
        </div>
    )
}

export default Displaymatches
