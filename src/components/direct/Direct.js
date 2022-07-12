import React from "react";
import "./Direct.css"
import {IoIosArrowDown} from 'react-icons/io'
import Rb from '../img/Eu.png'
function Direct(){

    return (

        
            <div className="menu__msg">

                <div className="container__msg">

                        <div className="container__mensagem">
                            
                            <div className="menu-chat">

                                <p className='usuario'>Irineuzinho</p>

                                <IoIosArrowDown className="arrow_msg"/>

                                <p><svg height="30" viewBox="0 0 21 21" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"><path d="m7 1.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682"/><path d="m14.5.46667982c.5549155.5734054.5474396 1.48588056-.0167966 2.05011677l-6.9832034 6.98320341-3 1 1-3 6.9874295-7.04563515c.5136195-.5178979 1.3296676-.55351813 1.8848509-.1045243z"/><path d="m12.5 2.5.953 1"/></g></svg></p>

                            </div>

                            
                        
                            
                    
                    <div className="mensagens msg">

                        <div className= 'image__perfil_msg'>

                            <img src='https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif' width="56px" height="56px"/>

                        </div>

                        <div className="nome_perfil_msg">

                            <p>pedro.avelar</p>

                            <p>Respondeu ao seu Story</p>

                        </div>

                    </div>

                    <div className="mensagens">

                        <div className= 'image__perfil_msg'>

                            <img src='https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/c97d3e/c97d3e33f02df664ce642921b948021d_large.jpg' width="56px" height="56px"/>

                        </div>

                        <div className="nome_perfil_msg">

                            <p>bianca_fonseca</p>

                            <p>Respondeu ao seu Story</p>

                        </div>

                    </div>

                    <div className="mensagens">

                        <div className= 'image__perfil_msg'>

                            <img src='https://uvn-brightspot.s3.amazonaws.com/assets/vixpt/j/jose-do-egito-genesis-1400x800-0821.jpeg' width="56px" height="56px"/>

                        </div>

                        <div className="nome_perfil_msg">

                            <p>josemeideiros</p>

                            <p>Online há 5h</p>

                        </div>

                    </div>



                    <div className="mensagens">

                        <div className= 'image__perfil_msg'>

                            <img src={Rb} width="56px" height="56px"/>

                        </div>

                        <div className="nome_perfil_msg">

                            <p>ryan_brayan</p>

                            <p>Online há 57 min</p>

                        </div>

                    </div>


                    <div className="mensagens">

                        <div className= 'image__perfil_msg'>

                            <img src='https://pbs.twimg.com/profile_images/1253734128362696705/q7-B77nO_400x400.jpg' width="56px" height="56px"/>

                        </div>

                        <div className="nome_perfil_msg">

                            <p>iasmin_barbosa</p>

                            <p>Enviou uma publicação</p>

                        </div>

                    </div>


                    <div className="mensagens">

                        <div className= 'image__perfil_msg'>

                            <img src='https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/73fb17/73fb17734ff6788ff68b5502ba24b10f_large.jpg' width="56px" height="56px"/>

                        </div>

                        <div className="nome_perfil_msg">

                            <p>thiago._ferreira</p>

                            <p>Online agora</p>

                        </div>

                    </div>


                    <div className="mensagens">

                        <div className= 'image__perfil_msg'>

                            <img src='https://pbs.twimg.com/media/FXTSNajXwAAllRS.jpg' width="56px" height="56px"/>

                        </div>

                        <div className="nome_perfil_msg">

                            <p>thaylasampaio007</p>

                            <p>Online há 3m</p>

                        </div>

                    </div>
                    
                    <div className="mensagens">

                        <div className= 'image__perfil_msg'>

                            <img src='https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/01/22/1798086607-ana-de-armas.jpg' width="56px" height="56px"/>

                        </div>

                        <div className="nome_perfil_msg">

                            <p>schultz.ana1</p>

                            <p>Online há 10h</p>

                        </div>

                    </div>

                    

                    <div className="mensagens">

                        <div className= 'image__perfil_msg'>

                            <img src='https://pbs.twimg.com/profile_images/1413878807912648705/aKJEFpPG_400x400.jpg' width="56px" height="56px"/>

                        </div>

                        <div className="nome_perfil_msg">

                            <p>ei_matheus27</p>

                            <p>Online há 1h</p>

                        </div>

                    </div>


                    

                </div>

                <div className="subcontainer">

                    
                    <svg aria-label="Direct" class="_8-yf5 " color="#262626" fill="#262626" height="96" role="img" viewBox="0 0 96 96" width="96"><circle cx="48" cy="48" fill="none" r="47" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="69.286" x2="41.447" y1="33.21" y2="48.804"></line><polygon fill="none" points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

                    <h2> Suas mensagens</h2>

                    <p>Envie fotos e mensagens privadas para um amigo ou grupo.</p>

                    <button className="enviar__msenagem">

                        Enviar mensagem

                    </button>

                </div>
                </div>
            </div>
            

        

    )
}
export default Direct;