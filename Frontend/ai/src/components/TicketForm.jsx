import { useState } from "react";
import API from "../api";

function TicketForm({ refreshTickets }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/tickets", { title, description });
      setTitle("");
      setDescription("");
      refreshTickets();
    } catch (error) {
      console.error("Error creating ticket:", error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Create Ticket</h2>

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br /><br />

      <textarea
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br /><br />

      <button type="submit">
        {loading ? "Processing..." : "Submit"}
      </button>
    </form>
  );
}

export default TicketForm;
