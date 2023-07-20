from yt_dlp import YoutubeDL


def yt_formater(url):
    FORMATS = ["1080", "720", "480", "360", "240"]

    def live_stream():
        return {"error": "LiveStream not supported"}

    def formats_check():
        correct_formats = []
        for resolution in FORMATS:
            if len(correct_formats) < 2:
                for format in info["formats"][::-1]:
                    try:
                        format_fix = format["format_note"].split("p")
                        if format_fix[0] == resolution:
                            correct_formats.append(format)
                            break
                    except:
                        pass

        return correct_formats

    with YoutubeDL() as ydl:
        info = ydl.extract_info(url, download=False)
        ydl.sanitize_info(info)

        if info["is_live"]:
            return [live_stream(), info]
        else:
            return [formats_check(), info]
