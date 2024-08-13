import React from 'react'

function TeamRowInfo(props) {
  const alt = `Team Crest for ${props.info.team.name}`

  return (
    <tr>
      <td>{props.info.position}</td>
      <td><img className='team-image' src={props.info.team.crest} alt={alt} /></td>
      <td>{props.info.team.name}</td>
      <td className='number-column'>{props.info.playedGames}</td>
      <td className='number-column'>{props.info.won}</td>
      <td className='number-column'>{props.info.draw}</td>
      <td className='number-column'>{props.info.lost}</td>
      <td className='number-column'>{props.info.goalsFor}</td>
      <td className='number-column'>{props.info.goalsAgainst}</td>
      <td className='number-column'>{props.info.goalDifference}</td>
      <td className='number-column'>{props.info.points}</td>
    </tr>
  )
}

export default TeamRowInfo