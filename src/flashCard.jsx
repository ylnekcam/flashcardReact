import React,{useState } from 'react'

export default function FlashCard({flashcard}) {
    //const [flip,setFlip]=useState(false)
    const [show,setShow]=useState(false)

    return (
   <div className="cardContainer" onClick={()=>setShow(!show)}>

            <div className="tittle" >
                {flashcard.Char}
            </div>

            <div className={`content ${show ? 'show':''}`}>
                    <span>zh/pinyin: {flashcard.Zhuyin} {flashcard.Pinyin}</span><br />
                    <span>Eng: {flashcard.Eng}</span><br />
                   
            </div>
   </div> 

       

    
         /* Flip html

            <div 
            className={`card ${flip ? 'flip':''}`}
            onClick={()=>setFlip(!flip)}>

           
        
                <div className="front">
                        {flashcard.Char}
                </div>

                <div className="back">
                        zh: {flashcard.Zhuyin}<br></br>
                        pin: {flashcard.Pinyin}<br></br>
                        Eng: {flashcard.Eng}<br></br>

                </div>
           
               
                
        </div>
        
        */

    )
}
