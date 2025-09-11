const Groq = require("groq-sdk");

// Load your API key from environment variables
const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function runChat() {
  const completion = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hello, what is the capital of France?" },
    ],
    temperature: 0.7,
    max_completion_tokens: 256,
    top_p: 0.9,
    stream: true,
  });

  console.log("Bot response: ");
  for await (const chunk of completion) {
    const delta = chunk.choices[0]?.delta?.content || "";
    process.stdout.write(delta);
  }
  console.log();
}

runChat().catch(console.error);

