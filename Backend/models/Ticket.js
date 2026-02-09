import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: String,
    assignedTeam: String,
    status: {
      type: String,
      default: "Open",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema);
