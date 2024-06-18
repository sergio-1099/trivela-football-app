import React from "react"
import './App.css'
import Nav from './components/Nav'

function App() {
  const [leagueSelection, setLeagueSelection] = React.useState([
    { league: 'Premier League', selected: true },
    { league: 'La Liga', selected: false },
    { league: 'Bundesliga', selected: false },
    { league: 'Serie A', selected: false },
    { league: 'Ligue 1', selected: false }, 
    { league: 'Champions League', selected: false },
    { league: 'EUROs', selected: false },
    { league: 'World Cup', selected: false }
  ])

  return <Nav leagueSelection={leagueSelection} setLeagueSelection={setLeagueSelection} />
}

export default App
