import os
import random
import string
from yt_dlp import YoutubeDL


def get_file(url, video_type):
    path = os.getcwd()

    def generate_random_string(length):
        characters = string.ascii_letters + string.digits

        random_string = "".join(random.choice(characters) for _ in range(length))
        return random_string

    random_string = generate_random_string(8)

    if video_type == "video":
        ydl_opts = {
            "format": "bestvideo[height<=1080]+bestaudio/best",
            "ffmpeg_location": path + "/ffmpeg/ffmpeg.exe",
            "outtmpl": path + "/files/" + random_string + ".%(ext)s",
            "merge_output_format": "mp4",
        }

    if video_type == "audio":
        ydl_opts = {
            "format": "bestaudio/best",
            "ffmpeg_location": path + "/ffmpeg/ffmpeg.exe",
            "outtmpl": path + "/files/" + random_string + ".%(ext)s",
            "postprocessors": [
                {
                    "key": "FFmpegMetadata",
                    "add_metadata": True,
                },
                {
                    "key": "FFmpegExtractAudio",
                    "preferredcodec": "mp3",
                },
            ],
        }

    with YoutubeDL(ydl_opts) as ydl:
        ydl.download(url)
        if video_type == "video":
            return random_string + ".mp4"
        if video_type == "audio":
            return random_string + ".mp3"
