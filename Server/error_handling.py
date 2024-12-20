# from flask import jsonify

# def handle_error(error):
#     """Custom error handling function."""
#     if isinstance(error, FileNotFoundError):
#         return jsonify({'message': 'Resource not found'}), 404
#     return jsonify({'message': 'Internal server error'}), 500

from flask import jsonify

def init_error_handlers(app):
    app.register_error_handler(404, handle_error)
    app.register_error_handler(500, handle_error)

def handle_error(error):
    response = {
        'message': 'An error occurred',
        'error': str(error)
    }
    return jsonify(response), error.code if hasattr(error, 'code') else 500
