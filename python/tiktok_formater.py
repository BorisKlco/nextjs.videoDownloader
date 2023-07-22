from yt_dlp import YoutubeDL

url = "https://www.tiktok.com/@stanleythestanman/video/7254736960290409770"

with YoutubeDL() as ydl:
    info = ydl.extract_info(url, download=False)
    ydl.sanitize_info(info)

    print(info)
