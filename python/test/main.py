from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "postgresql://postgres:mufskfHbRJqLtPaz@db.kdxgjdnjvppclcbenxqi.supabase.co:6543/postgres"
db.init_app(app)


class History(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    video_id = db.Column(db.String)
    title = db.Column(db.String)
    thumnail = db.Column(db.String)
    link = db.Column(db.String)


def is_cached():
    find = History.query.filter_by(url="test").first()
    return find


@app.route("/users")
def user_list():
    return ""


if __name__ == "__main__":
    app.run(threaded=True, debug=True, port=8080)
