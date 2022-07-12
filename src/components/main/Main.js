import React, { useState } from "react";




function Main(){
    var array_name = ['João', 'Bolsimito', 'robervasl', 'Roberval', 'Cleiton', 'Washingtton_Luiz', 'Jubiscleudo_Afonso', 'Jacinto_Pinto', 'Erre_Bê', 'Dom_caixote', 'herlock_sholmes', "Henry_Porter", 'Lula', 'Doria', 'Raxta', 'Dona_ines', 'patrick']

var frases = ['Fé', 'Dia lindo', 'Sempre feliz', 'Melhor dia', 'Sentindo-se alegre', 'Amo viver', 'Vontade de desistir de tudo', 'A vida é uma mentira', 'Bolsonaro lindo', 'A vida é um morango', 'Não compre cachorro', 'Palmitada nos vegetarianos', 'A TERRA É PLANA!!!!', 'Votem lula', 'Coxinha de flango', 'Pastel de queio', 'Adolo cachollo']

function myFunction() {
  for (let i in array_name){  
  }
  return array_name[Math.floor(random(1, array_name.length))-1]
  }
function frasesImagens() {
    
    for (let i in frases){  
    }
    return frases[Math.floor(random(1, frases.length))-1]
  }
function randomImg(){
  for (let i in imgPost){  
  }
  return imgPost[Math.floor(random(1, imgPost.length))-1]
  }
function randomProfileImg(){
  for (let i in imgProfile){  
  }
  return imgProfile[Math.floor(random(1, imgProfile.length))-1]
  }
  function random(mn, mx) { 
    return Math.random() * (mx - mn) + mn; 
  } 

  

    var imgPost = ['https://i.ytimg.com/vi/mHf4-xGNGo8/maxresdefault.jpg', 
    'https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60','http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg', 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1024h1024/2021/05/FEA/67183_coxinha-ofner-1.jpg','https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/bem-aleatorio..jpg?resize=564%2C564&ssl=1', 'https://pbs.twimg.com/profile_images/1435421726821830662/-owvCouh_400x400.jpg', 'https://img.estadao.com.br/fotos/crop/640x400/resources/jpg/3/4/1577718484943.jpg', 'https://www.redemagic.com/blog/wp-content/uploads/2016/08/blog-a-origem-do-meme-chloe-magic.jpg', 'https://s.yimg.com/ny/api/res/1.2/rzVTkJk7dTBSMjL5ZSN2_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/fca7bde0-9f90-11ea-9ffb-56c90e084970', 'https://imagens.brasil.elpais.com/resizer/uqFBiHWA0RmMWXHQmxG0T12XyMM=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/P4QHLRAIJTVK5ZLSO7MKF2AV6M.jpg', 'https://i.pinimg.com/736x/34/6f/9b/346f9bb8a4f07ee8e153aecc0d5e068c.jpg', 'https://img.youtube.com/vi/chxLjv8KXa8/hqdefault.jpg','https://i0.wp.com/teamcomics.com.br/wp-content/uploads/2021/11/IMG-20211113-WA0082.jpg?fit=1170%2C658&ssl=1', 'https://media.makeameme.org/created/entao-ele.jpg','https://i.ytimg.com/vi/aZ2DdhyO6yY/maxresdefault.jpg','https://static.wixstatic.com/media/21ac1c_00189165fb0d4c75901809c1a2702bb6~mv2.jpg/v1/fill/w_566,h_345,al_c,q_90/21ac1c_00189165fb0d4c75901809c1a2702bb6~mv2.jpg']

    var imgProfile = ['https://thumbs.gfycat.com/SparseLittleDipper-max-1mb.gif', 'https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__B639222B35DD2D1EBE5B3C9BF84851B285DB_doria.jpg._PROC_CP75CCH31622400.jpg', 'https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif', 'https://ogimg.infoglobo.com.br/in/14820419-5f5-689/FT1086A/2014_716246532-conta_tudo_-_xuxa_2.jpg_20140521.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxNiovR1ABR_oBLZdRHQxK79Ppf3_3sExn7AwBNQ-BzcZe0kMD08agYpQsN-iPfR-3TA&usqp=CAU', 'http://cria3.com.br/blog/wp-content/uploads/2021/04/meme-1.jpg']

    function adicionar_post() {
        let cont = 0
        
        while(cont < 200){
          posts.push({username:myFunction(), caption: frasesImagens(), imageUrl: randomImg(), imgProfile: randomProfileImg(), class_nome:cont})
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
      
      
      var [posts, setPosts] = useState([
      ]);
      
    
    
      
      
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
        <div>
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
              class_nome={post.class_nome}
        
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