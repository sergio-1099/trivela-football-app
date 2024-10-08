import React from 'react'
import TeamRowInfo from './TeamRowInfo'

function LeagueInfo(props) {
  const [table, setTable] = React.useState(null)
  const [season, setSeason] = React.useState('2024')
  
  const league = props.leagueSelection.find(obj => obj.selected)
  const selectedLeague = league.code
  let standings
  let leagueStandings = {}

  React.useEffect(() => {
    const fetchLeagueInfo = async () => {
      try {
        const baseUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:8888/.netlify/functions'
        : '/.netlify/functions'
        const apiUrl = `${baseUrl}/fetchFootballData/v4/competitions/${selectedLeague}/standings/?season=${season}`

        console.log(`Full API Path: ${apiUrl}`)
        const response = await fetch(apiUrl)

        leagueStandings = await response.json()
        standings = leagueStandings.standings[0].table

        const tableContent = standings.map(row => (
          <TeamRowInfo key={row.team.id} info={row} />
        ))

        setTable(tableContent)
      } catch (error) {
        console.log("Error fetching data: ")
      }
    }

    fetchLeagueInfo()
  }, [selectedLeague, season])

  const handleSeasonChange = (event) => {
    setSeason(event.target.value)
  }
  
  return (
    <div className='table-container'>
      <h2 className='league-heading'>{league.league}</h2>
      
      <div className='season-changer'>
        <label htmlFor="season">Choose a Season:</label>

        <select name="season" id="season" value={season} onChange={handleSeasonChange}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>

      <div className='league-table-container'>
        <table className='league-table'>
          <thead>
            <tr className='league-header-row'>
              <th>Pos</th>
              <th></th>
              <th>Name</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {table || <tr><td>Error retrieving content.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeagueInfo