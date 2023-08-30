import React from 'react';
import '../css/character-cards.css'
import { Character } from '../assets/data';


export class Cards extends React.Component {
  render(){
    return(
      <section id='character-cards'>
        {this.props.info.map((character: Character) => {
          return(
            <div className='card'>
              <div className='card-titles'>
                <h3>{character.name}</h3>
                {character.nickName ? <h4>{character.nickName}</h4> : ''}
              </div>
              <img src={character.imageUrl} alt="" />
              <p>{character.background}</p>
            </div>
          )
        })}
      </section>
    )
  }
}