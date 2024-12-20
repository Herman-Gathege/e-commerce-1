from flask import Blueprint, request, jsonify, current_app
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User
import jwt
import datetime

auth_bp = Blueprint('auth', __name__)

# Login Route
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    # Validate input
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Email and password are required'}), 400

    user = User.query.filter_by(email=data['email']).first()

    # Verify password and generate token
    if user and check_password_hash(user.password, data['password']):
        try:
            token = jwt.encode(
                {'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
                current_app.config['SECRET_KEY'],  # Use app secret key
                algorithm='HS256'
            )
            return jsonify({'token': token})
        except Exception as e:
            return jsonify({'message': 'Error generating token', 'error': str(e)}), 500

    return jsonify({'message': 'Invalid credentials'}), 401

# Signup Route
@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    # Validate input
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Email and password are required'}), 400

    # Check if the email is already registered
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'Email already exists'}), 409

    # Hash password and create new user
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(email=data['email'], password=hashed_password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        return jsonify({'message': 'Error creating user', 'error': str(e)}), 500
