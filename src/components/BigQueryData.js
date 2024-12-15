// src/components/BigQueryData.js
import React, { useState, useEffect } from 'react';
import { queryBigQuery } from '../utils/bigquery';

const BigQueryData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await queryBigQuery();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>BigQuery Data</h2>
      <h3>Energy Consumption History Across Continents Over Years in TWH (Tera Watt Hours)</h3>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row.name}: {row.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default BigQueryData;

