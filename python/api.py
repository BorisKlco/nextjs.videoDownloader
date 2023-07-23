import os
from flask import Flask, request, redirect, jsonify
from flask import send_file
from flask_cors import CORS
import yt_download
from yt_dlp import YoutubeDL

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def main_route():
    return jsonify({"error": "Bad URL"}, {})


@app.route("/test", methods=["POST"])
def post_test():
    data = request.json
    with YoutubeDL() as ydl:
        try:
            info = ydl.extract_info(data, download=False)
            return jsonify(info)
        except:
            return {"error": "Wrong URL"}


@app.route("/showme", methods=["POST"])
def show():
    data = request.json
    print(data)
    return {"test": "/test"}


@app.route("/ok", methods=["GET"])
def test2():
    return "Nice"


@app.route("/download", methods=["GET"])
def download():
    url = "https://www.youtube.com/watch?v=kYiJqOF4PPQ"
    try:
        file = yt_download.download_file(url)
        return redirect("/serve_file/" + file)
    except:
        return jsonify({"error": "Something is wrong, try again..."})


@app.route("/serve_file/<file>")
def dynamic_redirect(file):
    path = os.getcwd()
    download_file = path + "/files/" + file
    return send_file(download_file, as_attachment=True)


if __name__ == "__main__":
    app.run(threaded=True, debug=True, port=8080)
