from yt_dlp import YoutubeDL


def download_file(video_id, option):
    url = "https://www.youtube.com/watch?v=" + video_id

    if option == "video":
        ydl_opts = {
            "format": "248 + bestaudio/best",
            "ffmpeg_location": "/ffmpeg/ffmpeg.exe",
            "outtmpl": "%(id)s.%(ext)s",
            "merge_output_format": "mp4",
        }
    else:
        ydl_opts = {
            "format": "bestaudio/best",
            "ffmpeg_location": "/ffmpeg/ffmpeg.exe",
            "outtmpl": "%(id)s.%(ext)s",
            "postprocessors": [
                {
                    "key": "FFmpegExtractAudio",
                    "preferredcodec": "mp3",
                }
            ],
        }

    with YoutubeDL(ydl_opts) as ydl:
        try:
            ydl.download(url)
            if option == "video":
                return video_id + ".mp4"
            return video_id + ".mp3"
        except:
            return "Error"
