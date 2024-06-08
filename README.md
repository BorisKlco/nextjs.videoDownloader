# nextjs.videoDownloader
Multi-site video/audio downloader , mp3/mp4 formats.

next.js + Flask API + SQLAlchemy

- Youtube/Youtube Music/Youtube Shorts
- Insta reels/Insta videos
- TikToks/Twitter/Twitch clips/Reddit videos

Tested on Python 3.10
1. set default port for python api server (/python/api.py)
```
if __name__ == "__main__":
    app.run(threaded=True, debug=True, port=8080)
```
2. App using api in 3 files 
```
/components/fetchData.tsx
/components/fetchLink.tsx
This is used on client side. So you want to create reverse proxy for api.py port (for example: api.domain.tld)

/components/fetchHistory.tsx
This is fetched from server side.. So you can use localhost.
```
3. set default app port in package.json
```
"start": "next start -p 8090",
```
4. npm run build

<p align="center">
  <img src="https://i.imgur.com/lNqFxhp.jpeg" style="width:100%" />
</p>
