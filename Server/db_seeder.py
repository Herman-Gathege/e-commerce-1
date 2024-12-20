from app import app, db
from models import Product

def seed():
    # Add some products
    product1 = Product(name='Product 1', category='Category 1', price=100, image_url='product1.jpg')
    db.session.add(product1)

    product2 = Product(name='Product 2', category='Category 2', price=200, image_url='product2.jpg')
    db.session.add(product2)

    db.session.commit()
    print('Database seeded!')

if __name__ == '__main__':
    # Make sure the code is executed inside the app context
    with app.app_context():
        seed()
