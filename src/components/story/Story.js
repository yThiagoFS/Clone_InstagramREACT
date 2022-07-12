import React from "react";
import './Story.css';



function Story({userImg, userName}) {
    return(
            
                <div className='story' id='seila'>

                    {/* <button className="prev__button" onclick={moverLeft}>A</button> */}

                    <div className="img1 img" >
                        <img src={userImg}/>
                    </div>
                    
                    <div className='user__name'>
                        <p className="nomes">{userName}</p>
                    </div> 

                </div>
            
    )}
        

export default Story;   