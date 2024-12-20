# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS
# from auth import auth_bp
# from routes import admin_bp
# from config import Config
# # from flask_migrate import Migrate
# import error_handling

# # Initialize the Flask app
# app = Flask(__name__)
# app.config.from_object(Config)  # Use configuration settings

# # Allow cross-origin requests
# CORS(app)

# # Initialize the SQLAlchemy instance
# db = SQLAlchemy(app)

# # Register Blueprints
# app.register_blueprint(auth_bp)
# app.register_blueprint(admin_bp)

# # Initialize error handlers
# error_handling.init_error_handlers(app)

# # Register error handlers
# app.register_error_handler(404, error_handling.handle_error)
# app.register_error_handler(500, error_handling.handle_error)

# # Models for Product, Order, Sale, and Notification
# class Product(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100), nullable=False)
#     category = db.Column(db.String(100), nullable=False)
#     price = db.Column(db.Float, nullable=False)
#     image = db.Column(db.String(100), nullable=True)

# class Order(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     customer_name = db.Column(db.String(100), nullable=False)
#     total_price = db.Column(db.Float, nullable=False)
#     status = db.Column(db.String(50), nullable=False)
#     discount = db.Column(db.Float, default=0.0)

# class Sale(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
#     quantity_sold = db.Column(db.Integer, nullable=False)
#     total_sale = db.Column(db.Float, nullable=False)

# class Notification(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     message = db.Column(db.Text, nullable=False)

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate  # Import Flask-Migrate
from auth import auth_bp
from routes import admin_bp
from config import Config
import error_handling

# Initialize the Flask app
app = Flask(__name__)
app.config.from_object(Config)  # Use configuration settings

# Allow cross-origin requests
CORS(app)

# Initialize the SQLAlchemy instance
db = SQLAlchemy(app)

# Initialize Flask-Migrate
migrate = Migrate(app, db)  # Set up migrations with SQLAlchemy

# Register Blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(admin_bp)

# Initialize error handlers
error_handling.init_error_handlers(app)

# Register error handlers
app.register_error_handler(404, error_handling.handle_error)
app.register_error_handler(500, error_handling.handle_error)

# Models for Product, Order, Sale, and Notification
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(100), nullable=True)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(100), nullable=False)
    total_price = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(50), nullable=False)
    discount = db.Column(db.Float, default=0.0)

class Sale(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    quantity_sold = db.Column(db.Integer, nullable=False)
    total_sale = db.Column(db.Float, nullable=False)

class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text, nullable=False)

if __name__ == '__main__':
    app.run(debug=True)
