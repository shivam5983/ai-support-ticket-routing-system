function Dashboard({ tickets }) {
  const total = tickets.length;
  const open = tickets.filter(t => t.status === "Open").length;
  const high = tickets.filter(t => t.priority === "High").length;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Dashboard</h2>
      <p>Total Tickets: {total}</p>
      <p>Open Tickets: {open}</p>
      <p>High Priority Tickets: {high}</p>
    </div>
  );
}

export default Dashboard;
