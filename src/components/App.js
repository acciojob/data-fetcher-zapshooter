import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => {
        if (!json || Object.keys(json).length === 0) {
          setData(null);
        } else {
          setData(json);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      {loading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>{error}</span>
      ) : !data ? (
        <span>No data found</span>
      ) : (
        <>
          <span>Data Fetched from API</span>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default App;
