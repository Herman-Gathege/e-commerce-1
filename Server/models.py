from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Product model
# class Product(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100), nullable=False)
#     price = db.Column(db.Float, nullable=False)
#     category = db.Column(db.String(50), nullable=False)
#     image_url = db.Column(db.String(200), nullable=True)

#     def __repr__(self):
#         return f'<Product {self.name}>'

from extensions import db  # Import db from the extensions module
from datetime import datetime

# Product model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255))  # Add this line to include the image_url column

    # Relationships
    orders = db.relationship('Order', backref='product', lazy=True)
    discounts = db.relationship('Discount', backref='product', lazy=True)
    sales = db.relationship('Sale', backref='product', lazy=True)

    def __repr__(self):
        return f'<Product {self.name}>'

# Order model
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    total_price = db.Column(db.Float, nullable=False)

    # Relationship
    product = db.relationship('Product', backref='orders', lazy=True)

    def __repr__(self):
        return f'<Order {self.id}>'

# Discount model
class Discount(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    discount_percentage = db.Column(db.Float, nullable=False)

    # Relationship
    product = db.relationship('Product', backref='discounts', lazy=True)

    def __repr__(self):
        return f'<Discount {self.discount_percentage}%>'

# Sale model
class Sale(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    quantity_sold = db.Column(db.Integer, nullable=False)
    total_sale = db.Column(db.Float, nullable=False)

    # Relationship
    product = db.relationship('Product', backref='sales', lazy=True)

    def __repr__(self):
        return f'<Sale {self.id} - Product {self.product_id}>'

# Notification model
class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(250), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)  # Set the default to the current time

    def __repr__(self):
        return f'<Notification {self.message}>'

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'
