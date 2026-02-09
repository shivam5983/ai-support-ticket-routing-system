function TicketList({ tickets }) {
  return (
    <div>
      <h2>All Tickets</h2>

      {tickets.length === 0 && <p>No tickets available</p>}

      {tickets.map((ticket) => (
        <div key={ticket._id} className="ticket">
          <div className="ticket-header">
            <h3>{ticket.title}</h3>
            <span className={`status ${ticket.status.toLowerCase()}`}>
              {ticket.status}
            </span>
          </div>

          <p className="description">{ticket.description}</p>

          <div className="ticket-details">
            <span className="badge category">
              {ticket.category}
            </span>

            <span className={`badge priority ${ticket.priority.toLowerCase()}`}>
              {ticket.priority}
            </span>

            <span className="badge assigned">
              {ticket.assignedTeam}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TicketList;
