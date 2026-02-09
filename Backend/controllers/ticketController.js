import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;

    console.log("Incoming request:", title, description);

    const ticket = await Ticket.create({
      title,
      description,
      category: "Technical",
      priority: "Medium",
      assignedTeam: "Tech Team",
      status: "Open"
    });

    console.log("Ticket saved successfully");

    res.status(201).json(ticket);
  } catch (error) {
    console.error("CREATE TICKET ERROR:", error);
    res.status(500).json({ message: "Error creating ticket" });
  }
};

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    console.error("GET TICKETS ERROR:", error);
    res.status(500).json({ message: "Error fetching tickets" });
  }
};
