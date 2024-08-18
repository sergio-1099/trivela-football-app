import fetch from 'node-fetch';

export const handler = async function(event, context) {
  const { path, queryStringParameters } = event;
  const apiKey = process.env.VITE_API_KEY;
  const apiUrl = `https://api.football-data.org${path.replace('/.netlify/functions/fetchFootballData', '')}`;

  const queryString = new URLSearchParams(queryStringParameters).toString();
  const fullApiUrl = `${apiUrl}${queryString ? '?' + queryString : ''}`;

  console.log(`Fetching from API: ${fullApiUrl}`);

  try {
    const response = await fetch(fullApiUrl, {
      headers: {
        'X-Auth-Token': apiKey,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`API Error: ${error}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to fetch data' }),
      };
    }

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
    console.error("Function Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};
