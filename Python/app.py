from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pytesseract
from PIL import Image
import nltk
from nltk.corpus import words
from spellchecker import SpellChecker

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'   
db = SQLAlchemy(app)
CORS(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)

    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({'error': 'Missing fields'}), 400

    new_user = User(name=name, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Signup successful/ By Renox Kizangila'}), 200

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({'error': 'No image found in the request'}), 400

    image_file = request.files['image']
    image = Image.open(image_file)
    text = pytesseract.image_to_string(image)

    # Apply NLP techniques for error correction
    nltk.download('words')
    word_list = words.words()
    spell = SpellChecker()

    corrected_text = []
    for word in text.split():
        corrected_word = spell.correction(word)
        if corrected_word in word_list:
            corrected_text.append(corrected_word)
        else:
            corrected_text.append(word)

    return jsonify({'text': ' '.join(corrected_text)}), 200

if __name__ == '__main__':
    app.run()
