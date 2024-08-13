import React from 'react'
import './App.css'
import Nav from './components/Nav'
import LeagueInfo from './components/LeagueInfo'

function App() {
  const [leagueSelection, setLeagueSelection] = React.useState([
    { league: 'Premier League', selected: true, code: 'PL' },
    { league: 'La Liga', selected: false, code: 'PD' },
    { league: 'Bundesliga', selected: false, code: 'BL1' },
    { league: 'Serie A', selected: false, code: 'SA' },
    { league: 'Ligue 1', selected: false, code: 'FL1' },
    { league: 'Primeira Liga', selected: false, code: 'PPL' },
    { league: 'Eredivisie', selected: false, code: 'DED' },
    { league: 'Championship', selected: false, code: 'ELC' },
    { league: 'Champions League', selected: false, code: 'CL' },
    { league: 'EUROs', selected: false, code: 'EC' },
    { league: 'World Cup', selected: false, code: 'WC' }
  ])

  return (
    <>
      <Nav leagueSelection={leagueSelection} setLeagueSelection={setLeagueSelection} />
      <LeagueInfo leagueSelection={leagueSelection} />
    </>
  )
}

export default App
