const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { path } = event;
  const apiKey = process.env.VITE_API_KEY;

  const apiUrl = `https://api.football-data.org${path.replace('/.netlify/functions/fetchFootballData', '')}`;
  
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-Auth-Token': apiKey,
      },
    });
    
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};
