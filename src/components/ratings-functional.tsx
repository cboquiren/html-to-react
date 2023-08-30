import { Character } from '../assets/data';
import '../css/character-ratings.css'


function CreateTop5 ({order}) {
  const Top = order.slice(0, 5);
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

export function Table (info) {
  const VoteOrder = Array.from(info.info).sort((a, b) => b.votes - a.votes);
  return (
    <section id='character-ratings'>
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        <CreateTop5 order={VoteOrder} />
      </table>
    </section>
  )
}