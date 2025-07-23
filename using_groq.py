
import os
from groq import Groq


# Load your API key
api_key = "your_groq_api_key_here"

client = Groq(api_key=api_key)

# Start a chat completion request
completion = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[
        {"role": "system", "content": "You are a brief, rude assistant."},
        {"role": "user", "content": "Hello, who won the 2022 World Cup?"}
    ],
    temperature=0.7,
    max_completion_tokens=256,
    top_p=0.9,
    stream=True,  # stream mode for responsive output
)

# Stream and print response chunks
print("Bot response: ")
for chunk in completion:
    delta = chunk.choices[0].delta.content
    if delta:
        print(delta, end="", flush=True)
print()