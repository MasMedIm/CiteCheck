from fastapi import FastAPI, HTTPException
from dotenv import load_dotenv
import os
import requests
import json
# Load environment variables
load_dotenv()

# Configuration
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

def read_content(file_path):
    with open(file_path, 'r') as file:
        return file.read()

app = FastAPI()

url = 'https://api.openai.com/v1/chat/completions'
headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {OPENAI_API_KEY}'
}

# Read system and user content from files
system_content = read_content('system_content.txt')



@app.post("/process-string/")
def process_string(input_string: str) :
    if not input_string:
        raise HTTPException(status_code=400, detail="Input string cannot be empty")

    data = {
        'model': 'gpt-4-turbo',
        'messages': [
            {'role': 'system', 'content': system_content},
            {'role': 'user', 'content': input_string}
        ]
    }

    response = requests.post(url, headers=headers, data=json.dumps(data))

    return response.json()['choices'][0]['message']['content']
