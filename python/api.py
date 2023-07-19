from flask import Flask, request, jsonify
from flask import send_file
from flask_cors import CORS
import yt_formater
import yt_download

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def main_route():
    return jsonify({"error": "Bad URL"}, {})


@app.route("/fetch_metadata/<video_id>", methods=["GET"])
def video_json(video_id):
    try:
        video_formats, metadata = yt_formater.yt_formater(
            "https://www.youtube.com/watch?v=" + video_id
        )
        return jsonify(video_formats, metadata)
    except:
        return jsonify({"error": "Bad URL"}, {"metadata": "Bad URL"})


@app.route("/download", methods=["GET"])
def download():
    video_id = request.args.get("id")
    option = request.args.get("option")
    print(video_id, option)
    try:
        file = yt_download.download_file(video_id, option)
    except:
        return jsonify({"error": "Something is wrong, try again..."})
    dummy = "/" + file
    return send_file(dummy, as_attachment=True)


if __name__ == "__main__":
    app.run(threaded=True, debug=False, port=8080)
