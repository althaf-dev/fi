# Install server with hot reload for local development

## Install browser-sync globally
```
npm install -g browser-sync //this is for global installation
```


## Run the below command where your index.html file is located
```
browser-sync start --server --watch --directory --files "*"
```

#### Generate A4(210 x 297 mm) PDF - Equivalent to 840px width for HTML
```
wkhtmltopdf --enable-local-file-access --disable-smart-shrinking --page-size A4 -T 19 -B 13 -L 0 -R 0 --header-html header.html index.html --footer-html footer.html ./output.pdf
```

-T 19 denotes the header height
-B 13 denotes the footer height

Example: Used in PL KFS folder

**Note**: To debug the code add the flag --debug-javascript 

If the brew installed wkhtmltopdf doesn't work properly, use the following command to create container to run wkhtmltopdf's previous versions
```
podman buildx build --platform linux/amd64 -t wkhtmltopdf:0.12.5 templates
```
