// utils/bigquery.js
const { BigQuery } = require('@google-cloud/bigquery');
const path = require('path');

// Set up your credentials and client
const keyPath = path.join(__dirname, '~/green-sphere-ai/keys/green-sphere-ai-firebase-admin.json');
process.env.GOOGLE_APPLICATION_CREDENTIALS = keyPath;

const bigquery = new BigQuery();

const queryBigQuery = async () => {
  const query = `
    SELECT Year, World, Asia, Africa, Europe, North America, Latin America
    FROM \`green-sphere-ai.green_sphere_dataset.continent_consumption_twh\`
    LIMIT 10
  `;

  const [rows] = await bigquery.query(query);
  return rows;
};

module.exports = { queryBigQuery };

