import React from "react"

import "./AsideSugestion.css"




function AsideSugestion({sugestionImg, userSugestion, followBtn}) {
    return(

        <div className="sugestions">

        <div className="sugestions__header">
        
        </div>
        
         <div className="first__sugestion sugestion">

            <div className="sugestions__wrapper">

                <div className="sugestion__img">

                    <img src={sugestionImg}/>

                </div>

                <div className="sugestion__names">

                    <h2>{userSugestion}</h2>
                    <p> Followed by ...</p>
                    
                </div>
            </div> 

                <button className="follow">{followBtn}</button>

        </div>
    </div>

    )}
    

export default AsideSugestion;