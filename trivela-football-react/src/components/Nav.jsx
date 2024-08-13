import React from 'react'

function Nav(props) {
  const leagueElements = props.leagueSelection.map(league => {
    const leagueClass = league.selected ? "nav-button selected" : "nav-button"
    return (
      <li className="nav-list-element" key={league.league}>
        <button className={leagueClass} onClick={() => handleClick(league.league)}>
          {league.league}
        </button>
      </li>
    )
  })

  function handleClick(leagueName) {
    const oldSelect = props.leagueSelection.findIndex(obj => obj.selected)
    const selectIdx = props.leagueSelection.findIndex(obj => obj.league === leagueName)

    props.setLeagueSelection(prevSelection => {
      const array = [...prevSelection]
      array[oldSelect].selected = false
      array[selectIdx].selected = true;
      return array;
    })
  }

  return (
    <nav>
      <h1>Trivela</h1>

      <h2 className="competition-cat">Domestic Leagues</h2>
      <ul className="nav-list">
        {leagueElements[0]}
        {leagueElements[1]}
        {leagueElements[2]}
        {leagueElements[3]}
        {leagueElements[4]}
        {leagueElements[5]}
        {leagueElements[6]}
        {leagueElements[7]}

      </ul>

      <h2 className="competition-cat">European Leagues</h2>
      <ul className="nav-list">
        {leagueElements[8]}
      </ul>

      <h2 className="competition-cat">International Leagues</h2>
      <ul className="nav-list">
        {leagueElements[9]}
        {leagueElements[10]}
      </ul>
    </nav>
  )
}

export default Nav