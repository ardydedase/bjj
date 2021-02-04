# BJJ Notes

Static web page generated is available at: https://bjj.onrender.com/

I use this web app to take notes of what I learn in Brazilian Jiu Jitsu (BJJ).
Since BJJ has a lot of little details, I'm using YouTube videos then add notes to its timestamps.

## Run locally

```
npm run dev
```

Open: http://localhost:3000/

## Build static files

Generated files will be in the `/out` folder.

```
npm run build
```

Run the static files locally.

```
./node_modules/http-server/bin/http-server ./out
```

Open: http://localhost:8080/

## Deployment

Deployed using [Render](https://render.com)
