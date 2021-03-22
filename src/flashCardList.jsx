import React from 'react'
import Flashcard from './flashCard'
import './myCss/card.css'

export default function FlashCardList({ flashcards}) {     
 

           return (<div class="card-grid">
               {flashcards.map((flashcard,i) => (
            <Flashcard flashcard={flashcard} key = {i}/>))}

           </div> 
           )

}
