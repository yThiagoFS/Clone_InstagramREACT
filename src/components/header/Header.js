import React from "react";
import "./Header.css"
// import Batata from "../perfil/Perfil.js"

import {RiMessengerLine} from 'react-icons/ri'
import {CgAddR} from 'react-icons/cg'
import {ImCompass2} from 'react-icons/im'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdHomeFilled} from 'react-icons/md' 
import {VscSearch} from 'react-icons/vsc'
import {CgClose} from 'react-icons/cg'
import { Link } from "react-router-dom";
import {GrHomeRounded} from "react-icons/gr"


function Header(){

    function OpenModal(){
        const modal = document.querySelector('.modal')
        if(modal.classList.contains('active')){
          modal.classList.remove('active')
        } else{
          modal.classList.add('active')
        }
    }
      document.addEventListener('click', (el) => {
        const element = el.target
        const modal = document.querySelector('.modal')
        const modalcontent = document.querySelector('.modal__content')
        
        if(modal.classList.contains('active')){
          if(element.classList.value != modalcontent){
            modal.classList.remove('active')
          } else if(element.classList.value != 'modal'){
            modal.classList.remove('active')
          } 
  
          if(element.classList.value === 'barra-de-pesquisa'){
            OpenModal()
          }
        }

        const container = document.querySelector('.container__pub')
        
        if(element.classList.contains('public')){
            container.classList.add('active')
        } else{
            container.classList.remove('active')
        }
      })



      
      
     
    

      

    return(
        <div className="app">

          <div className="app__header">
            <div className="app__headerWrapper">
              
             <Link to="/" > <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Instagram original logo" title="Instagram original logo"/> </Link>

                <div className="search__wrapper">
                  <VscSearch className="icon__search"/>
                </div>
                
                <input className="barra-de-pesquisa" type="text" onClick={OpenModal} placeholder="Pesquisar" ></input>
                




                {/*Modal da barra de pesquisa */}




                <div className="modal">

                    <div className="wrapper__options">

                        <h2>Recentes</h2>

                        <h2>Limpar Tudo</h2>

                    </div>

                    <div className="modal__content">
                        <div className="content__wrapper">
                        
                            <div className="img">
                                <img src="https://i.pinimg.com/736x/7e/52/03/7e5203cf809ac8f84bca02431a6ba0c5.jpg"/>
                            </div>

                            <div className="names__content">
                                <h2>Erre_Bê</h2>
                                <h3>Erre Bê</h3>
                            </div>

                        </div>

                        <div className="close">
                            <span className="fechar"><CgClose className="fechar__icon"/></span>
                        </div>

                    </div>
                    
                    <div className="modal__content">
                      
                        <div className="content__wrapper">
                          
                        
                            <div className="img">
                              
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ88nDFCxmzQeXgsq22U8pFzGP6_WoytyCg&usqp=CAU"/>
                                
                            </div>

                            <div className="names__content">
                              
                                <h2>Joana_monteiro</h2>
                                <h3>Joana Monteiro</h3>
                            </div>

                        </div>

                        <div className="close">
                            <span className="fechar"><CgClose className="fechar__icon"/></span>
                        </div>

                    </div>
                    
                    <div className="modal__content">

                        <div className="content__wrapper">

                        
                            <div className="img">

                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"/>

                            </div>

                            <div className="names__content">

                                <h2>Elon_musk</h2>

                                <h3>Elon Musk </h3>

                            </div>

                        </div>

                        <div className="close">
                            <span className="fechar"><CgClose className="fechar__icon"/></span>
                        </div>

                    </div>
                    
                    <div className="modal__content">
                      
                        <div className="content__wrapper">
                          
                        
                            <div className="img">
                              
                                <img src="https://i.pinimg.com/originals/e0/bc/5c/e0bc5cd4f1d7cff7116a325490b3010d.png"/>
                                
                            </div>

                            <div className="names__content">
                              
                                <h2>Robson_xuxu</h2>
                                
                                <h3>Robso</h3>
                                
                            </div>

                        </div>

                        <div className="close">
                            <span className="fechar"><CgClose className="fechar__icon"/></span>
                        </div>

                    </div>
                    
                    <div className="modal__content">
                      
                        <div className="content__wrapper">
                    
                            <div className="img">
                              
                                <img src="https://portalpopline.com.br/wp-content/uploads/2020/10/Design-sem-nome-2020-10-29T023104.262.png"/>
                                
                            </div>

                            <div className="names__content">
                              
                                <h2>Mc_Brinquedo</h2>
                                
                                <h3>Brinquedo jd</h3>
                                
                            </div>

                        </div>

                        <div className="close">
                            <span className="fechar"><CgClose className="fechar__icon"/></span>
                        </div>

                    </div>
                </div>




                   {/*Modal do botão de publicação*/}



                   

                <div className="container__pub">

                    <div className="close">

                      <CgClose className="close__icon"/>
                
                    </div>

                    <div className="modal__option">

                      <div className="title__modal">

                        <h2>Criar publicação nova </h2>

                      </div>


                      <div className="container__items">


                        <div className="svg__container">

                          <svg aria-label="Ícone para representar conteúdos multimédia tais como imagens ou vídeos" className="_8-yf5 " color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>

                        </div>

                        <div className="phrase">
                            <h2>Arrasta fotos e vídeos para aqui</h2>
                        </div>

                        <div className="add__button">

                          <button type="button">
                            Selecione do computador
                            {/* <input type='file' accept="image/png, image/jpeg" value=""/> */}

                          </button>
                          
                        </div>

                      </div>

                    </div>

                  </div>





              <div className="app__headerButtons">
                <Link className="home fundo" to='/' > 
                  <MdHomeFilled className='icon homes'/>
                </Link> 

                <Link className="direct fundo" to="/Direct"> 
                  <RiMessengerLine className='icon direct'  /> 
                </Link>

                <button className="publicar-header fundo" >   
                  <CgAddR className='icon public'/>
                </button>

                <Link className="reels fundo" to="/Explore"> 
                  <ImCompass2 className='icon'/>
                </Link>

                <button className="like fundo"> 
                  <AiOutlineHeart className='icon heart' />
                </button>
                <Link className="profile fundo" to="/Perfil">
                  <img src="https://inspirarte.art.br/cdn/posts/12e2d293ebe74d68bd60167e97e8862cf31cdcd89067425cad1588df5bd6f086.jpg" />
                </Link>
              </div>
            </div>
          </div>
    </div>
    )
}


export default Header