import os
from flask import Flask, request, redirect, jsonify
from flask import send_file
from flask_cors import CORS
import yt_formater
import yt_download
from yt_dlp import YoutubeDL

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def main_route():
    return jsonify({"error": "Bad URL"}, {})


@app.route("/tiktok", methods=["GET"])
def tiktok():
    url = "https://www.tiktok.com/@stanleythestanman/video/7254736960290409770"

    with YoutubeDL() as ydl:
        info = ydl.extract_info(url, download=False)
        ydl.sanitize_info(info)
        return jsonify(info)


@app.route("/fetch_metadata/<video_id>", methods=["GET"])
def video_json(video_id):
    if request.args.get("site") == "youtube":
        try:
            video_formats, metadata = yt_formater.yt_formater(video_id)
            return jsonify(video_formats, metadata)
        except:
            return jsonify({"error": "Bad URL"}, {"metadata": "Bad URL"})
    else:
        url = (
            "https://www.tiktok.com/@"
            + video_id
            + "/video/"
            + request.args.get("tiktok")
        )
        with YoutubeDL() as ydl:
            info = ydl.extract_info(url, download=False)
            ydl.sanitize_info(info)
            return jsonify([info["formats"][len(info["formats"]) - 1]], info)


@app.route("/download", methods=["GET"])
def download():
    video_id = request.args.get("id")
    option = request.args.get("option")
    media_format = request.args.get("format")
    format_id = request.args.get("format_id")
    try:
        file = yt_download.download_file(video_id, option, media_format, format_id)
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
