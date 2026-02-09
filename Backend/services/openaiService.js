import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const classifyTicket = async (description) => {
  const prompt = `
Classify this support ticket into JSON:
{
  "category": "Billing | Technical | Sales",
  "priority": "Low | Medium | High",
  "assignedTeam": "Billing Team | Tech Team | Sales Team"
}

Ticket:
${description}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
  });

  const text = response.choices[0].message.content;

  try {
    return JSON.parse(text);
  } catch {
    return {
      category: "Technical",
      priority: "Medium",
      assignedTeam: "Tech Team",
    };
  }
};
