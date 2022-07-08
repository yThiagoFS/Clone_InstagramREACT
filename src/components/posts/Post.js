import React from "react";
import "./Post.css";
import ModalComent from '../modalComent/ModalComent'

import Like from "./images/like.png"
import {CgProfile} from 'react-icons/cg'
import {FaEllipsisH} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {HiOutlinePaperAirplane} from 'react-icons/hi'
import {RiBookmarkLine} from 'react-icons/ri'
import {BiSmile} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai'



function Post({username, caption, imageUrl, imgProfile, chama_perfil, postLike, commentNumber})
 {
  
  function heart(){
   const botao = document.querySelector('.heart__pub')
   const botaoRed = document.querySelector('.heart_coracao_red')
   if(botao.className != 'invisivel'){
     botaoRed.classList.remove('invisivel')
     botao.classList.add('invisivel')
   } 
}

function heartColor(){
  const botao = document.querySelector('.heart__pub')
  const botaoRed = document.querySelector('.heart_coracao_red')
  if(botaoRed.className != 'invisivel'){
    botao.classList.remove('invisivel')
    botaoRed.classList.add('invisivel')
  }
}

function botao_azul(){
  const input = document.querySelector('.comentario')
  const publicar = document.querySelector('.publicar')
  console.log(input.value.length)
  if(input.value.length > 0){
    console.log('pão')
     publicar.style.opacity = '1'
  } else if(input.value.length === 0) {
    publicar.style.opacity = '0.2'
  }
}

function chamaModalComent(){
    <ModalComent/>
}
  
  return (
    <div className="post">

      <div className="post__header">
      
      <img src={imgProfile}/>
        <h3>{username}</h3>
        <FaEllipsisH className="reticencias"/>
      </div>

      {/*  */}
      
        <img className="post__image" src={imageUrl} alt={caption} title={caption} />
        {/* */}
        
        <div className="reacao-e-comentario">
          <div className="reacoes">
            <div className="reactions__wrapper">

              <button className="heart__pub" id='pao' onClick={heart}> <AiOutlineHeart className="heart-reacao white"/></button>

              <button className="heart_coracao_red invisivel"  onClick={heartColor}> <AiFillHeart className="heart-reacao vermelho"/></button>
              

              <button className="comment"> <FaRegComment className="comment-reacao"/> </button>

              <button className="airplane" onClick={chama_perfil}> <HiOutlinePaperAirplane className="share-reacao" /> </button>
              
            </div>
            <div className="flag"> 
              <RiBookmarkLine className="save-reacao"/> 
            </div>
          </div>

          

          <div className="container-comentario">

            <p className="curtidas"> {postLike} pessoas gostaram</p>  {/* Colocar quandtidade aleatoria */}
   
            <p className="post__text">
              <strong className="text-name">{username}</strong> {caption}
            </p>

            <div className="pao02"> 
                <p className="ver_mais_comentario" onClick={chamaModalComent}>
                  Ver todos os {commentNumber} comentários {/* Colocar quandtidade aleatoria */}
                </p>

                <p className="tempo">
                  HÁ 8 MINUTOS {/* Colocar quandtidade aleatoria */}
                </p>



                <div class="super-container-comentario">

                  <div class="comentario-wrapper">

                  <div className="emoji">

                        <button>
                          <BiSmile className="emoji-smile"/>
                        </button>

                  </div> 
                    
                    <input className="comentario" type="text" id="input" onChange={botao_azul} placeholder="Adicione um comentário..." ></input>
   
                  </div>

                  <div className="publicar"> Publicar</div>

                </div>
                  
                 

              </div>
            
          </div>


        </div>
        
      </div>
      
  );
}



// var input = document.querySelectorById('input').value;




export default Post;