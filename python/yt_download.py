import os
import random
import string
from yt_dlp import YoutubeDL


def download_file(url):
    path = os.getcwd()

    def generate_random_string(length):
        characters = string.ascii_letters + string.digits

        random_string = "".join(random.choice(characters) for _ in range(length))
        return random_string

    random_string = generate_random_string(6)

    ydl_opts = {
        "format": "bestvideo[height<=1080]+bestaudio/best",
        "ffmpeg_location": path + "/ffmpeg/ffmpeg.exe",
        "outtmpl": path + "/files/" + random_string + "%(id)s.%(ext)s",
        "merge_output_format": "mp4",
    }

    ydl_opts = {
        "format": "bestaudio/best",
        "ffmpeg_location": path + "/ffmpeg/ffmpeg.exe",
        "outtmpl": path + "/files/" + random_string + "%(id)s.%(ext)s",
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


if __name__ == "__main__":
    download_file(
        "https://music.youtube.com/playlist?list=OLAK5uy_mbtmiD5A6u--cHAfXMek7cjmQyi3VbRhY"
    )
