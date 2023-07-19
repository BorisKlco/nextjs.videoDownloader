from yt_dlp import YoutubeDL

URL = "https://www.youtube.com/watch?v=TIfAkOBMf5A"
FORMATS = ["1080p", "720p", "480p", "360p"]


def live_stream():
    is_live = {"error": "Error: Video is LiveStreamed!"}
    return is_live


def formats_check():
    correct_formats = []
    for resolution in FORMATS:
        if len(correct_formats) < 2:
            for format in info["formats"][::-1]:
                try:
                    if format["format_note"] == resolution and format["ext"] == "webm":
                        correct_formats.append(format)
                    print(format["format_id"], format["format_note"])
                except:
                    print("Error")

    return print("Correct", correct_formats, len(correct_formats))


with YoutubeDL() as ydl:
    info = ydl.extract_info(URL, download=False)
    ydl.sanitize_info(info)

    if info["is_live"]:
        live_stream()
    else:
        # for format in info["formats"]:
        #     print(format)
        formats_check()
