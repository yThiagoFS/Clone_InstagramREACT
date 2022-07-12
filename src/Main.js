import React, { useState } from "react";
import Post from "./components/posts/Post";
import Aside from "./components/aside/Aside";
import Story from "./components/story/Story";
import AsideSugestion from "./components/aside_sugestion/AsideSugestion";
import Buttons from "./components/story_button/Buttons";




function Main(){
    var array_name = ['pedro.avelar', 'bianca_fonseca', 'josemeideiros', 'leticia._miranda', 'otaviomiranda', 'vitoria_sena', 'miguel.vital', 'thiago._ferreira', 'ryan_brayan', 'jessica', 'jhowg', 'gab.augustoz', 'bruno_silva', 'aurora_sales', 'izaacguerra','kaiodelaqua','_mia.petit','iasmin_barbosa','niveapj', 'jessica_santtis', 'thaylasampaio007','schultz.ana1','ei_matheus27']

var frases = ['Fé', 'Dia lindo', 'Sempre feliz! :)', 'Melhor dia', 'Sentindo-se alegre', 'Amo viver', 'Não acredite em algo simplesmente porque ouviu.','Não acredite em algo simplesmente porque todos falam a respeito.', 'Não acredite em tradições só porque foram passadas de geração em geração.', 'Mas, depois de muita análise e observação, se você vê que algo concorda com a razão e que conduz ao bem e benefício de todos, aceite-o e viva-o.','A vida é um morango', 'Não compre cachorro', 'Adolo cachollo', 'Que seu dia lindo!','Amooo o PROA','Sonho!','O impossivel é questão de opnião!!', 'Foco e determinação, não há limites para quem tem sonhos e metas.', 'Mais uma conquista!','O tempo é uma ilusão!' ]

function myFunction() {
  return array_name[Math.floor(random(1, array_name.length))-1]
  }
function frasesImagens() {
    return frases[Math.floor(random(1, frases.length))-1]
  }
function randomImg(){
  return imgPost[Math.floor(random(1, imgPost.length))-1]
  }
function randomProfileImg(){
  return imgProfile[Math.floor(random(1, imgProfile.length))-1]
  }
function randomNumberComent(){
  const numeroAleatorio = Math.fround(random(1, 10000))-1
  
  let numeroDecimal = numeroAleatorio.toFixed(2)
  
  let numAleatorioString = numeroDecimal.toString()
  let numStringQuebrada = numAleatorioString.replace(".", "")
  let arrayNum = [numStringQuebrada]

  
  for(var i in arrayNum){
    var pao = arrayNum[i]
    var paoSplit = pao.split('')
    if(pao.length == 4){
      paoSplit.splice(1,0, ',')
    }else if(pao.length == 5){
      paoSplit.splice(2,0, ',')
    }else if(pao.length == 6){
      paoSplit.splice(3,0, ',')
    }
    let numFinal = paoSplit.join('')
    return numFinal;
  }
  
  
  }
function random(mn, mx) { 
  return Math.random() * (mx - mn) + mn; 
  } 

  

var imgPost = ['https://i.ytimg.com/vi/mHf4-xGNGo8/maxresdefault.jpg','http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg', 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1024h1024/2021/05/FEA/67183_coxinha-ofner-1.jpg','https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/bem-aleatorio..jpg?resize=564%2C564&ssl=1', 'https://pbs.twimg.com/profile_images/1435421726821830662/-owvCouh_400x400.jpg', 'https://img.estadao.com.br/fotos/crop/640x400/resources/jpg/3/4/1577718484943.jpg','https://s.yimg.com/ny/api/res/1.2/rzVTkJk7dTBSMjL5ZSN2_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/fca7bde0-9f90-11ea-9ffb-56c90e084970','https://img.youtube.com/vi/chxLjv8KXa8/hqdefault.jpg','https://i.ytimg.com/vi/aZ2DdhyO6yY/maxresdefault.jpg','https://static.wixstatic.com/media/21ac1c_00189165fb0d4c75901809c1a2702bb6~mv2.jpg/v1/fill/w_566,h_345,al_c,q_90/21ac1c_00189165fb0d4c75901809c1a2702bb6~mv2.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIM2Px6dR2-37FbFyn4jtvGjIVSPbneHqfWU-8yuCcnXJLisofItJycW8VKA4QWWFKP4E&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqzVmMdBs6eBHVkgNwgMNZ7C7UdkAfU8dA8J9ju31_E8dceRkNX1m-_8H2ECaRq_s960&usqp=CAU', 'https://i.pinimg.com/236x/89/90/d5/8990d5cd10b2c0c5f8d1e1fd153cc8fb.jpg', 'https://i.pinimg.com/236x/ae/cb/91/aecb91a37e02e9f8a91bd7b4ca218cc0.jpg', 'https://i.pinimg.com/236x/27/87/14/2787142768d821bc274ffd5010453ea6.jpg','https://i.pinimg.com/originals/08/47/14/08471445eff840591cf72facde47a22e.gif']

var imgProfile = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU', 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg','https://www.newidea.com.au/media/104671/untitled-design-16.jpg?width=720&center=0.0,0.0', 'https://www.newidea.com.au/media/104672/untitled-design-16.jpg?width=720&center=0.0,0.0', 'https://www.nationalworld.com/jpim-static/image/2022/07/08/16/who-is-the-richest-person-in-the-world-2022-elon-musk.jpg?width=1200&enable=upscale', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11aBJkA0X6FlSmVv-Z3G_89aLLk9ATpOAJQ&usqp=CAU', 'https://www.maisgoias.com.br/cdn-cgi/image/fit=contain,width=960,quality=90,format=auto/https://uploads.maisgoias.com.br/2022/06/6737a703-chris-evans.webp','https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Holland_by_Gage_Skidmore.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjr3M1RIwaiBCGQPKxnNRsOQ6HwO8Gg9ZYWA&usqp=CAU','https://s.yimg.com/ny/api/res/1.2/_bCKWyghoKYiGmMhaHtyKQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM0NQ--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-12/88454270-19ca-11ea-bffe-4a87a351f5d9', 'http://f.i.uol.com.br/folha/ilustrada/images/17223579.jpeg' ,'https://portalpopline.com.br/wp-content/uploads/2022/07/stranger-things-max.jpg','https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/04/Queen_Elizabeth_II_of_New_Zealand_cropped-e1649786346910.jpg' ]



function adicionar_post() {
        
        
        for(let cont = 0; cont< 200; cont++){
          posts.push({username:myFunction(), caption: frasesImagens(), imageUrl: randomImg(), imgProfile: randomProfileImg(), commentNumber: randomNumberComent(), postLike: randomNumberComent()})
          
        }
      }
      function adicionar_story(){
        let contador = 0
    
        while(contador < 194){
          story.push({username: myFunction(), userImg:randomProfileImg(),})
          contador += 1
        }
        
      }
      
      // function adicionar_perfil_msg() {
      //   let cont = 0
        
      //   while(cont < 10){
      //     direct.push({userName:myFunction(), imgUser: randomProfileImg()})
      //     cont++
      //   }
          
      // }
      
      


        
      
      
      
      const [posts, setPosts] = useState([
      ])
      
    
      // infit_timeline()
     adicionar_post()
    
      const [aside_perfil, setAside_perfil] = useState([{
        userImg:"https://inspirarte.art.br/cdn/posts/12e2d293ebe74d68bd60167e97e8862cf31cdcd89067425cad1588df5bd6f086.jpg", 
        userNick: "jaiminho_carteiro", 
        userName: "Jaiminho", 
        changeButton: "Mudar", 
      }])
    
    
      const [aside, setAside] = useState([
        {
          sugestionImg:randomProfileImg(), 
          userSugestion:myFunction(), 
          followBtn:"Seguir",
    
        },
        {
          sugestionImg:randomProfileImg(), 
          userSugestion:myFunction(), 
          followBtn:"Seguir",
    
        },
        {
          sugestionImg:randomProfileImg(), 
          userSugestion:myFunction(), 
          followBtn:"Seguir",
    
        },
        {
          sugestionImg:randomProfileImg(),
          userSugestion:myFunction(), 
          followBtn:"Seguir",
    
        },
        {
        sugestionImg: randomProfileImg(), 
        userSugestion: myFunction(), 
        followBtn: "Seguir",
      },
      ])
    
    
      const [story, setStory] = useState([
      ])
      
      adicionar_story()
      
    return (
      
        <div className='pao'>
            
            <div className="story__container">
                <div className="story__wrapper" id="story__wrapper">
                  {story.map((story) => (
                  <Story
                    userImg={story.userImg}
                    userName={story.username}
                  />
                  ))}
                </div>

                <Buttons/>
        
            </div>

        <div className="timeline">
          {posts.map((post) => (
            <Post
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
              imgProfile={post.imgProfile}
              chama_perfil={post.chama_perfil}
              postLike={post.postLike} 
            />
          ))}
        </div>
        <div className="aside__container">
            {aside_perfil.map((aside) => (
              <Aside
              userImg={aside.userImg}
              userNick={aside.userNick}
              userName={aside.userName}
              changeButton={aside.changeButton}
              seeAll={aside.seeAll} />
            ))}
        
        </div>
            <div className="aside__sugestion">
        {aside.map((aside) => (
            <AsideSugestion
            sugestionImg={aside.sugestionImg}
            userSugestion={aside.userSugestion}
            followBtn={aside.followBtn} />
          ))}
            </div>

         
        </div>

        
    )   
}

export default Main;