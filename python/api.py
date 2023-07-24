import os
from flask import Flask, request, jsonify
from flask import send_file
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import download
from yt_dlp import YoutubeDL

db = SQLAlchemy()
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.getcwd() + "/db.sqlite3"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)
CORS(app)


class History(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    image = db.Column(db.String)
    link = db.Column(db.String)

    def __repr__(self):
        return f"-\nID:{self.id}\nTITLE:{self.title}\nIMAGE:{self.image}\nLINK:{self.link}\n-"


@app.route("/", methods=["GET"])
def main_route():
    return jsonify({"error": "Wrong URL"})


@app.route("/history", methods=["GET"])
def history():
    db_query = History.query.order_by(History.id.desc()).all()
    result = []
    for row in db_query:
        result.append(
            {"id": row.id, "title": row.title, "image": row.image, "link": row.link}
        )
    return jsonify(result)


@app.route("/extract_info", methods=["POST"])
def post_test():
    data = request.json
    with YoutubeDL() as ydl:
        try:
            if "youtu" in data:
                info = ydl.extract_info(data, download=False, process=False)
                ydl.sanitize_info(info)
                save_view = History(
                    title=info["title"],
                    image=info["thumbnail"],
                    link=info["original_url"],
                )
                db.session.add(save_view)
                db.session.commit()
                return jsonify(info)
            else:
                info = ydl.extract_info(data, download=False)
                save_view = History(
                    title=info["title"],
                    image=info["thumbnail"],
                    link=info["original_url"],
                )
                db.session.add(save_view)
                db.session.commit()
                return jsonify(ydl.sanitize_info(info))
        except:
            return {"error": "Wrong URL"}


@app.route("/get_me_link", methods=["POST"])
def show():
    data = request.json
    print(data)
    file = download.get_file(data["url"], data["type"])
    return {"url": "http://127.0.0.1:8080/serve_file/" + file}


@app.route("/serve_file/<file>")
def dynamic_redirect(file):
    path = os.getcwd()
    download_file = path + "/files/" + file
    return send_file(download_file, as_attachment=True)


if __name__ == "__main__":
    app.run(threaded=True, debug=True, port=8080)
