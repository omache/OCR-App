# Image to Text Application Readme

This is a backend application for my application. The frontend is made using React. 

## Installation

To run this application, you need to have Python and the required dependencies installed.

1. Clone the repository:
`git clone github.com/omache/OCR-App`

2. Navigate to the project directory:
`cd <project_directory>`

3. Install the required dependencies:
`pip install -r requirements.txt`

## Usage

1. Start the Flask development server:

`python app.py`

2. The server should now be running on `http://localhost:5000`.

## API Endpoints

### User Signup

- **URL:** `/signup`
- **Method:** `POST`
- **Description:** Create a new user account.
- **Request Body:**
- `name` (string): User's name.
- `email` (string): User's email address.
- `password` (string): User's password.
- **Response:**
- Success:
 - Status Code: 200
 - Body: `{'message': 'Signup successful/ By Renox Kizangila'}`
- Failure:
 - Status Code: 400
 - Body: `{'error': 'Missing fields'}`

### Image Upload and Text Extraction

- **URL:** `/upload`
- **Method:** `POST`
- **Description:** Upload an image file and extract the text from it with error correction.
- **Request Body:**
- `image` (file): The image file to be uploaded.
- **Response:**
- Success:
 - Status Code: 200
 - Body: `{'text': '<extracted_text>'}`
- Failure:
 - Status Code: 400
 - Body: `{'error': 'No image found in the request'}`

## Dependencies

The application uses the following dependencies:

- Flask: A lightweight web framework for Python.
- Flask SQLAlchemy: Provides easy integration of SQLAlchemy, an Object-Relational Mapping (ORM) library, with Flask.
- Flask CORS: Enables Cross-Origin Resource Sharing (CORS) support in Flask applications.
- PyTesseract: A Python wrapper for Google's Tesseract OCR engine, used for text extraction from images.
- Pillow (PIL): A Python imaging library used for image processing.
- NLTK (Natural Language Toolkit): A library for natural language processing tasks in Python.
- NLTK Word Corpus: A corpus from NLTK containing a list of English words.
- PySpellChecker: A spell-checking library for Python.

## License

This project is licensed under the [MIT License](LICENSE).



 
