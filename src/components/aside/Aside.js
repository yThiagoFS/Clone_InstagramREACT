import React from "react";
import "./Aside.css";



function Aside({userImg, userNick, userName, changeButton, seeAll}) {
    return(
            <div className="aside__container">

                {/* Aside Header Content */}

                <div className="aside__header">

                    <div className="content__header">
                    
                        <div className="user__photo">
                            <img src={userImg}></img>
                        </div>

                        <div className="names">
                            <h2>irineuzinho</h2>
                            <p>{userName}</p>
                        </div>

                        <button className="change__btn">{changeButton}</button>

                        

                    </div>

                    <div className="e-morreu">
                        <h2>Sugestões para você</h2>
                        <button className="see__all__btn">{seeAll}</button>
                    </div>

                </div>

            </div>
    )}
    

export default Aside;