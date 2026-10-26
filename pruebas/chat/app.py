from ollama import chat

response = chat(
    model='llama3.2:3b',
    messages=[
        
        {
            'role': 'user', 
            'content': 'Hablame del anime steins gate!'
            
        }
            
    ],
)
print(response.message.content)