import React, { useState, useEffect } from "react";
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
  
const [valor, setValor] = useState(postLike)
const [style, setStyle] = useState (<AiOutlineHeart className="heart-reacao"/>);
const changeStyle = () => {
    setStyle(<AiFillHeart className="heart-reacao vermelho"/>)
    var pao = ''
    for(let c in postLike){
      pao += postLike[c]
    }
    var quebrido = pao.split('')
    if(parseInt(quebrido[quebrido.length - 1]) == 9){
      var feno = parseInt(quebrido[quebrido.length - 2] )+ 1
      quebrido.pop()
      quebrido.pop()
      quebrido.push(feno)
      quebrido.push(0)
    } else{
      var todinho = parseInt(quebrido[quebrido.length - 1]) + 1
      quebrido.pop()
      quebrido.push(todinho)
    }
    if(style.props.className == 'heart-reacao vermelho'){
      setStyle(<AiOutlineHeart className="heart-reacao"/>)
      var todinho = parseInt(quebrido[quebrido.length - 1]) - 1
      quebrido.pop()
      quebrido.push(todinho)
    }
    setValor(quebrido)

}


const [publicar, setPublicar] = useState("publicar")

const [user, setUser] = useState({
  name: ''
});
// (function () {
  
//   console.log('leite')
//   return(
//     setUser( {name: ''})
//   )
// })()


const valueInput = e => {
  setUser( {[e.target.name]:  e.target.value});
  // const input = document.getElementById('input')
  console.log('coco '+user.name.length)
  let teste = user.name.length + 1
  console.log(teste)
  if(teste == 1){
    setPublicar("publicarBlue") 

  }
  
  if(teste >= 3){
   
    setPublicar("publicarBlue") 
    console.log('vazio')
  }
  else if(teste == 2){
    if(user.name.length == 1){
      teste = 0
    }
   setPublicar("publicar")
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

              <button className='heart-pub' id='pao' onClick={changeStyle}>{style}</button>

              {/* <button className="heart_coracao_red invisivel"> <AiFillHeart className="heart-reacao vermelho"/></button> */}
              

              <button className="comment"> <FaRegComment className="comment-reacao"/> </button>

              <button className="airplane" onClick={chama_perfil}> <HiOutlinePaperAirplane className="share-reacao" /> </button>
              
            </div>
            <div className="flag"> 
              <RiBookmarkLine className="save-reacao"/> 
            </div>
          </div>

          

          <div className="container-comentario">

            <p className="curtidas"> {valor} pessoas gostaram</p>  {/* Colocar quandtidade aleatoria */}
   
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
                    
                    <input className="comentario" type="text" id="input"  onChange={valueInput} placeholder="Adicione um comentário..." name="name"></input>
   
                  </div>

                  <div className={publicar}>Publicar</div>

                </div>
                  
                 

              </div>
            
          </div>


        </div>
        
      </div>
      
  );
}






export default Post;