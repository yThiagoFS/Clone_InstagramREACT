import React from "react";
import "./Buttons.css"
// import Story from "./components/story/Story";
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'


function Buttons (){
    var contador = 0
    

    function moveRight() {
        contador -= 400
        const botaoLeft = document.getElementById('paozinho')
        const botaozinhoRight = document.getElementById('paozinho1')
        
        const story = document.getElementById('story__wrapper')
        story.style.transform = 'translateX('+contador+'px)'
        
        if (contador <= -400 ){
            console.log('ovo')
            console.log(contador)
            botaoLeft.style.display = 'block'
            
        }  
        if(contador === -15200){
            console.log('ovo')
            console.log(contador)
            botaozinhoRight.style.display = 'none'
        }
    }
    function moveLeft() {
        contador += 400
        const botaoLeft = document.getElementById('paozinho')
        const botaozinhoRight = document.getElementById('paozinho1')
        const story = document.getElementById('story__wrapper')
        story.style.transform = 'translateX('+contador+'px)'
        
        if (contador >= 0){
            console.log('ovo')
            console.log(contador)
            botaoLeft.style.display = 'none'
        }
        if (contador === -14800){
            console.log('ovo')
            console.log(contador)
            botaozinhoRight.style.display = 'block'
        }
}
    // function moveLeft() {    
    //     const story = document.getElementById('seila')
    //     story.style.transform = 'translateX(-400px)'
    // }
    
    return (
    <div className="wrapper__buttons">
        <button className="next__button" id="paozinho1" onClick={moveRight}><IoIosArrowForward className="next"/></button>
        <button className="prev__button" id="paozinho" onClick={moveLeft} ><IoIosArrowBack className="prev" /></button>
        {/* <button className="prev__button" onClick={moveLeft}>A</button> */}
    </div>

)}
export default Buttons;

