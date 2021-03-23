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
                    {flashcard.Zhuyin}
                   
                         
            </div>
            
            <div className={`contentPin ${show ? 'show':''}`}>
                    {flashcard.Pinyin}
                         
            </div>

            <div className={`contentEng ${show ? 'show':''}`}>
            <span>{flashcard.Eng}</span>
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
