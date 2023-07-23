from flask import Flask, request, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy

# create the extension
db = SQLAlchemy()
# create the app
app = Flask(__name__)
# configure the SQLite database, relative to the app instance folder
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "postgresql://postgres:mufskfHbRJqLtPaz@db.kdxgjdnjvppclcbenxqi.supabase.co:6543/postgres"
# initialize the app with the extension
db.init_app(app)


@app.route("/users")
def user_list():
    users = users = db.session.execute(
        db.select(User).order_by(User.username)
    ).scalars()
    print(users)
    for user in users:
        print(user)
        print(f"User ID: {user.id}, Username: {user.username}, Email: {user.email}")
    return ""


if __name__ == "__main__":
    app.run(threaded=True, debug=True, port=8080)
