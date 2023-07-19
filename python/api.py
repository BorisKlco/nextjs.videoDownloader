from flask import Flask, jsonify
from flask_cors import CORS
import yt_formater

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


if __name__ == "__main__":
    app.run(debug=True, port=8080)
