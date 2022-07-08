import React, { useState } from "react";
import Post from "./components/posts/Post";
import Aside from "./components/aside/Aside";
import Story from "./components/story/Story";
import AsideSugestion from "./components/aside_sugestion/AsideSugestion";
import Buttons from "./components/story_button/Buttons";




function Main(){
    var array_name = ['João', 'Bolsimito', 'robervasl', 'Roberval', 'Cleiton', 'Washingtton_Luiz', 'Jubiscleudo_Afonso', 'Jacinto_Pinto', 'Erre_Bê', 'Dom_caixote', 'herlock_sholmes', "Henry_Porter", 'Lula', 'Doria', 'Raxta', 'Dona_ines', 'patrick']

var frases = ['Fé', 'Dia lindo', 'Sempre feliz', 'Melhor dia', 'Sentindo-se alegre', 'Amo viver', 'Vontade de desistir de tudo', 'A vida é uma mentira', 'Bolsonaro lindo', 'A vida é um morango', 'Não compre cachorro', 'Palmitada nos vegetarianos', 'A TERRA É PLANA!!!!', 'Votem lula', 'Coxinha de flango', 'Pastel de queio', 'Adolo cachollo']

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
  return parseFloat(Math.floor(random(1, 10000))-1)
  }
function random(mn, mx) { 
  return Math.random() * (mx - mn) + mn; 
  } 

  

var imgPost = ['https://i.ytimg.com/vi/mHf4-xGNGo8/maxresdefault.jpg','http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg', 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1024h1024/2021/05/FEA/67183_coxinha-ofner-1.jpg','https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/bem-aleatorio..jpg?resize=564%2C564&ssl=1', 'https://pbs.twimg.com/profile_images/1435421726821830662/-owvCouh_400x400.jpg', 'https://img.estadao.com.br/fotos/crop/640x400/resources/jpg/3/4/1577718484943.jpg', 'https://www.redemagic.com/blog/wp-content/uploads/2016/08/blog-a-origem-do-meme-chloe-magic.jpg', 'https://s.yimg.com/ny/api/res/1.2/rzVTkJk7dTBSMjL5ZSN2_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/fca7bde0-9f90-11ea-9ffb-56c90e084970', 'https://imagens.brasil.elpais.com/resizer/uqFBiHWA0RmMWXHQmxG0T12XyMM=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/P4QHLRAIJTVK5ZLSO7MKF2AV6M.jpg', 'https://i.pinimg.com/736x/34/6f/9b/346f9bb8a4f07ee8e153aecc0d5e068c.jpg', 'https://img.youtube.com/vi/chxLjv8KXa8/hqdefault.jpg','https://i0.wp.com/teamcomics.com.br/wp-content/uploads/2021/11/IMG-20211113-WA0082.jpg?fit=1170%2C658&ssl=1', 'https://media.makeameme.org/created/entao-ele.jpg','https://i.ytimg.com/vi/aZ2DdhyO6yY/maxresdefault.jpg','https://static.wixstatic.com/media/21ac1c_00189165fb0d4c75901809c1a2702bb6~mv2.jpg/v1/fill/w_566,h_345,al_c,q_90/21ac1c_00189165fb0d4c75901809c1a2702bb6~mv2.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oQB4_tvtyvBz2TFAxKbqtd22eQ2Tk7b4Iw&usqp=CAU',"https://conteudo.imguol.com.br/c/noticias/35/2020/01/03/internautas-fazem-piada-com-terceira-guerra-mundial-e-o-fato-de-o-presidente-jair-bolsonaro-ser-palmeirense-1578072287497_v2_450x450.jpg", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCdH7AlRVL76NLEk-b_kUNUUX9_nIVRw0aw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIM2Px6dR2-37FbFyn4jtvGjIVSPbneHqfWU-8yuCcnXJLisofItJycW8VKA4QWWFKP4E&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqzVmMdBs6eBHVkgNwgMNZ7C7UdkAfU8dA8J9ju31_E8dceRkNX1m-_8H2ECaRq_s960&usqp=CAU', 'https://i.pinimg.com/236x/89/90/d5/8990d5cd10b2c0c5f8d1e1fd153cc8fb.jpg', 'https://i.pinimg.com/236x/65/33/18/653318a6fa16e12b51233be7f9fd85b5.jpg', 'https://i.pinimg.com/236x/ae/cb/91/aecb91a37e02e9f8a91bd7b4ca218cc0.jpg', 'https://i.pinimg.com/236x/27/87/14/2787142768d821bc274ffd5010453ea6.jpg', 'https://i.pinimg.com/236x/0b/c4/7b/0bc47b111f5081dcb9cfee31f3781557.jpg','https://i.pinimg.com/236x/4a/fb/72/4afb7220809ba102b2f4da90e8988176.jpg','https://i.pinimg.com/236x/ff/21/dd/ff21dd6e14671bff8bee56919da2373e.jpg','https://img.ifunny.co/images/4599a7ea2ab9b0c2193dd0861d5ab25fd3794d90554790eb696d7175d45fbc36_1.jpg', 'https://i.pinimg.com/originals/39/cd/48/39cd4812c791c15c10661865a10c08dd.gif', 'https://i.pinimg.com/originals/08/47/14/08471445eff840591cf72facde47a22e.gif', 'https://img.ifunny.co/images/79d8647a82301bc28050014c75f59f1ff98faa983b1ea113c34946b6b7f40fbb_1.webp']

var imgProfile = ['https://thumbs.gfycat.com/SparseLittleDipper-max-1mb.gif', 'https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__B639222B35DD2D1EBE5B3C9BF84851B285DB_doria.jpg._PROC_CP75CCH31622400.jpg', 'https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif', 'https://ogimg.infoglobo.com.br/in/14820419-5f5-689/FT1086A/2014_716246532-conta_tudo_-_xuxa_2.jpg_20140521.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxNiovR1ABR_oBLZdRHQxK79Ppf3_3sExn7AwBNQ-BzcZe0kMD08agYpQsN-iPfR-3TA&usqp=CAU', 'http://cria3.com.br/blog/wp-content/uploads/2021/04/meme-1.jpg','https://trello-backgrounds.s3.amazonaws.com/623a6020ad269364e84a2f7e/original/7e7fa3c5d5546f0d6befe7a5419b42e4/gab.png']



function adicionar_post() {
        let cont = 0
        
        while(cont < 200){
          posts.push({username:myFunction(), caption: frasesImagens(), imageUrl: randomImg(), imgProfile: randomProfileImg(), commentNumber: randomNumberComent(), postLike: randomNumberComent()})
          cont++
        }
          
      }
      function adicionar_story(){
        let cont = 0
    
        while(cont < 194){
          story.push({username: myFunction(), userImg:randomProfileImg(),})
          cont += 1
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
        userImg:"https://pbs.twimg.com/media/FJ9Oki6XIAIiMq4.jpg", 
        userNick: "Irineuzinho Silva", 
        userName: "Seis e ônibus", 
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
              commentNumber={post.commentNumber}
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