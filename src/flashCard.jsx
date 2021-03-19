import React,{useState } from 'react'

export default function FlashCard({flashcard}) {
    const [flip,setFlip]=useState(false)

    return (
         
        <div 
            className={`card ${flip ? 'flip':''}`}
            onClick={()=>setFlip(!flip)}
        >
                <div className="front">
                        {flashcard.Char}
                </div>

                <div className="back">
                        zh: {flashcard.Zhuyin}<br></br>
                        pin: {flashcard.Pinyin}<br></br>
                        Eng: {flashcard.Eng}<br></br>

                </div>
               
                
        </div>
    )
}
