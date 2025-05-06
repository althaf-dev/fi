#### Generate A4(210 x 297 mm) PDF - Equivalent to 840px width for HTML
```
wkhtmltopdf --enable-local-file-access --disable-smart-shrinking --page-size A4 -T 12 -B 12 -L 0 -R 0 index_be.html filename.pdf
```

**Note**: Replace data blob with proper data in index_be.html before generating PDF