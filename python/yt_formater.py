from yt_dlp import YoutubeDL


def yt_formater(url):
    FORMATS = ["1080p60", "1080p", "720p60", "720p", "480p", "360p"]

    def live_stream():
        return {"error": "Error: Video is LiveStreamed!"}

    def formats_check():
        correct_formats = []
        for resolution in FORMATS:
            if len(correct_formats) < 1:
                for format in info["formats"][::-1]:
                    try:
                        if (
                            format["format_note"] == resolution
                            and format["ext"] == "webm"
                        ):
                            correct_formats.append(format)
                            break
                    except:
                        pass

        return correct_formats

    with YoutubeDL() as ydl:
        info = ydl.extract_info(url, download=False)
        ydl.sanitize_info(info)

        if info["is_live"]:
            return live_stream()
        else:
            return formats_check()
