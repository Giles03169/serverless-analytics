import { useState, useEffect } from 'react';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://5e3kxnpvu3.execute-api.eu-west-1.amazonaws.com/dev/events")
      .then(res => res.json())
      .then(data => setEvents(data.items || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📊 Serverless Analytics Dashboard</h1>
      <table border="1" cellPadding="10" style={{ marginTop: "1rem", width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>Event ID</th>
            <th>User</th>
            <th>Action</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, idx) => (
            <tr key={idx}>
              <td>{event.eventId}</td>
              <td>{event.userId}</td>
              <td>{event.action}</td>
              <td>{event.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;