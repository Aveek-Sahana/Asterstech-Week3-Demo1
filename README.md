# Asterstech-Week3-GroqDemo
Introduction to using Groq API

## ⚠️ Use Enviormental Variables

Environment variables allow you to keep sensitive information like **API keys** out of your codebase.  

- ✅ Prevents accidental exposure (e.g., pushing keys to GitHub)  
- ✅ Makes your application more secure  
- ✅ Enables easy configuration for different environments (development, staging, production) without changing source code  


# How to run the demo in python
1. Open up a codespace in your browser
2. Open the terminal in the codespace
3. Run the following command to install the required packages:
    ```bash
    pip install groq
    ```
4. Replace the values inside the messages request
5. Replace `your_actual_api_key` with your actual Groq API key.
6. Run the following command to execute the demo:
    ```bash
    python using_groq.py
    ```

# How to run the demo in node.js
1. Install the SDK:
    ```bash
        npm install --save groq-sdk
    ```
2. Set your environment variable (replace with your real key):
    ```
        export GROQ_API_KEY=<your-api-key-here>
    ```
3. Run the script
    ```
        node using_groq.js
    ```
