import { Character } from '../assets/data';
import '../css/character-ratings.css'


function CharacterRows (props: {order: Character[]}) {
  const Top = props.order.slice(0, 5);
  return(
    Top.map((character: Character, index: number) => {
      return(
        <tr className={index % 2 === 0 ? 'dark' : 'light'}>
          <td>{character.name}</td>
          <td>{character.skillset.join(', ')}</td>
          <td>{character.votes}</td>
        </tr>
      )
    })
  )
}

export function Table (props: {characters: Character[]}) {
  const VoteOrder = Array.from(props.characters).sort((a, b) => b.votes - a.votes);
  return (
    <section id='character-ratings'>
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        <CharacterRows order={VoteOrder} />
      </table>
    </section>
  )
}