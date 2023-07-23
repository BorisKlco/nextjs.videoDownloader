import os
from flask import Flask, request, jsonify
from flask import send_file
from flask_cors import CORS
import download
from yt_dlp import YoutubeDL

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def main_route():
    return jsonify({"error": "Wrong URL"})


@app.route("/extract_info", methods=["POST"])
def post_test():
    data = request.json
    with YoutubeDL() as ydl:
        try:
            info = ydl.extract_info(data, download=False)
            return jsonify(info)
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
