# markdown-website
This project runs a web server which displays a markdown file.
# Running
## Docker
With docker, you should run
```bash
docker run -it -d \
    -p <port number>:<port number> \
    -e PORT=<port number> \
    -v /path/to/markdown.md:/app/web.md \
    marnixah/markdown-website:latest
```
## Without docker
Without docker, you should run
```bash
git clone https://github.com/marnixah/markdown-website.git
cd markdown-website
npm install
node .
```
# Editing
To edit the content of the website, simply edit web.md (or in docker, whatever file you bound it to)