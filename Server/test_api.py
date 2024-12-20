import pytest
from app import app, db
from models import Product

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_add_product(client):
    response = client.post('/products', json={
        'name': 'Test Product',
        'category': 'Category 1',
        'price': 50.0,
        'image': 'test_image.jpg'
    })
    assert response.status_code == 201
    assert b'Product added successfully' in response.data
