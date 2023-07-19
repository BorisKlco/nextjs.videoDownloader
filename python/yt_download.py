from yt_dlp import YoutubeDL


def download_file(video_id, option):
    url = "https://www.youtube.com/watch?v=" + video_id
    with YoutubeDL() as ydl:
        ydl.download(url)
