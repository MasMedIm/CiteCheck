# CiteCheck

This project leverages LLMs to assist Wikipedia editors in verifying the reliability of citations. The tool aims to address the challenge of over 500,000 "citation needed" tags on Wikipedia, enhancing editors' efficiency and improving the accuracy of information.

## Installation

To set up this tool, follow these steps:

### Prerequisites

- Python 3.x
- pip

### Dependencies

Install the required Python packages using pip:

```bash
pip install -r requirements.txt
```

### Environment Setup

Create a .env file in your project directory and include the following:

```makefile
OPENAI_API_KEY=your_openai_api_key_here
```

Replace your_openai_api_key_here with your actual API key obtained from OpenAI.

## Usage

Start the FastAPI server by running:

```bash
uvicorn main:app --reload
```

## Use the plugin

1. Open Chrome and navigate to chrome://extensions.
2. Enable Developer Mode (top right).
3. Click "Load unpacked" and select your extension directory.
4. Test the extension by highlighting text in any webpage and using the defined shortcut (Ctrl+Shift+Y).

