from app import app, db  # Import the app and db from app.py

# Ensure the app is in application context
with app.app_context():
    db.create_all()  # Creates all the tables in the database
    print("Database tables created successfully.")
