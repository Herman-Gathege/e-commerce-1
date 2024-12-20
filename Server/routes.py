# from flask import Blueprint, request, jsonify
# from models import db, Product, Order, Sale, Notification

# admin_bp = Blueprint('admin', __name__)

# # Route to get all products
# @admin_bp.route('/admin/products', methods=['GET'])
# def get_all_products():
#     products = Product.query.all()
#     return jsonify([{'id': p.id, 'name': p.name, 'category': p.category, 'price': p.price, 'image': p.image} for p in products])

# # Route to add a new product
# @admin_bp.route('/admin/products', methods=['POST'])
# def add_product():
#     data = request.get_json()

#     # Validate input
#     if not data or not data.get('name') or not data.get('category') or not data.get('price'):
#         return jsonify({'message': 'Name, category, and price are required'}), 400

#     new_product = Product(name=data['name'], category=data['category'], price=data['price'], image=data.get('image'))
#     db.session.add(new_product)
#     db.session.commit()
#     return jsonify({'message': 'Product added successfully'}), 201

# # Route to delete a product
# @admin_bp.route('/admin/products/<int:id>', methods=['DELETE'])
# def delete_product(id):
#     product = Product.query.get_or_404(id)
#     db.session.delete(product)
#     db.session.commit()
#     return jsonify({'message': 'Product deleted successfully'})

from flask import Blueprint, request, jsonify
from models import db, Product, Order, Sale, Notification
import os
from werkzeug.utils import secure_filename

admin_bp = Blueprint('admin', __name__)

# Define where to store uploaded images
UPLOAD_FOLDER = 'uploads/'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Check if the file has an allowed extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Route to get all products
@admin_bp.route('/admin/products', methods=['GET'])
def get_all_products():
    products = Product.query.all()
    return jsonify([{'id': p.id, 'name': p.name, 'category': p.category, 'price': p.price, 'image': p.image} for p in products])

# Route to add a new product
@admin_bp.route('/admin/products', methods=['POST'])
def add_product():
    # Check if the request contains files
    if 'image' not in request.files:
        return jsonify({'message': 'No image file provided'}), 400

    image = request.files['image']
    
    # If there's an image and it's valid, save it
    if image and allowed_file(image.filename):
        filename = secure_filename(image.filename)
        image_path = os.path.join(UPLOAD_FOLDER, filename)
        image.save(image_path)

        # Get other product details from form data
        data = request.form
        if not data or not data.get('name') or not data.get('category') or not data.get('price'):
            return jsonify({'message': 'Name, category, and price are required'}), 400

        new_product = Product(
            name=data['name'],
            category=data['category'],
            price=data['price'],
            image=image_path  # Save the image path to the product
        )
        db.session.add(new_product)
        db.session.commit()

        return jsonify({'message': 'Product added successfully'}), 201
    else:
        return jsonify({'message': 'Invalid file format'}), 400

# Route to delete a product
@admin_bp.route('/admin/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get_or_404(id)
    db.session.delete(product)
    db.session.commit()
    return jsonify({'message': 'Product deleted successfully'})
