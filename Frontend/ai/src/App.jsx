import { useEffect, useState } from "react";
import API from "./api";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import Dashboard from "./components/Dashboard";

function App() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const res = await API.get("/tickets");
      setTickets(res.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>AI Support Ticket Routing System</h1>
        <p>Automated AI-driven ticket classification & routing</p>
      </div>

      <div className="dashboard">
        <div className="card">
          <h3>Total Tickets</h3>
          <p>{tickets.length}</p>
        </div>
        <div className="card">
          <h3>Open Tickets</h3>
          <p>{tickets.filter((t) => t.status === "Open").length}</p>
        </div>
        <div className="card">
          <h3>High Priority</h3>
          <p>{tickets.filter((t) => t.priority === "High").length}</p>
        </div>
      </div>

      <div className="form-container">
        <TicketForm refreshTickets={fetchTickets} />
      </div>

      <TicketList tickets={tickets} />
    </div>
  );
}

export default App;
