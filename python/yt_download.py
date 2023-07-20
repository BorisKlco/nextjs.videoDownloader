import os
from yt_dlp import YoutubeDL
import random
import string


def download_file(video_id, option, media_format, format_id):
    url = "https://www.youtube.com/watch?v=" + video_id
    path = os.getcwd()

    def generate_random_string(length):
        characters = string.ascii_letters + string.digits

        random_string = "".join(random.choice(characters) for _ in range(length))
        return random_string

    random_string = generate_random_string(6)

    if option == "video":
        ydl_opts = {
            "format": format_id + " + bestaudio/best",
            "ffmpeg_location": path + "/ffmpeg/ffmpeg.exe",
            "outtmpl": path + "/files/" + random_string + "%(id)s.%(ext)s",
            "merge_output_format": "mp4",
        }
    elif media_format == "webm":
        ydl_opts = {
            "format": "bestaudio/best",
            "ffmpeg_location": path + "/ffmpeg/ffmpeg.exe",
            "outtmpl": path + "/files/" + random_string + "%(id)s.%(ext)s",
        }
    else:
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
                    "preferredcodec": media_format,
                },
            ],
        }

    with YoutubeDL(ydl_opts) as ydl:
        try:
            ydl.download(url)
            if option == "video":
                return random_string + video_id + ".mp4"
            return random_string + video_id + "." + media_format
        except:
            return "Error"


# if __name__ == "__main__":
#     download_file("SFZWaaK7KXk", "video", "720p60", "302")
