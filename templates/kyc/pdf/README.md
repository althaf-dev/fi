#### Generate A4(210 x 297 mm) PDF - Equivalent to 840px width & 1121px height for HTML
### Note: Ideally height should be 297*4 = 1188px but by trial and error the height is found as 1121px
```
wkhtmltopdf --enable-local-file-access --disable-smart-shrinking --page-size A4 -T 0 -B 0 -L 0 -R 0 index_be.html filename.pdf
```

#### Generate Mobile(103 x 288 mm) PDF - Equivalent to 412px width for HTML
```
wkhtmltopdf --enable-local-file-access --disable-smart-shrinking --page-width 103 --page-height 288 -T 0 -B 0 -L 0 -R 0 index_be.html filename.pdf
```

#### V2 KYC Generate A4(210 x 297 mm) PDF - Equivalent to 840px width & 1121px height for HTML
```
wkhtmltopdf --enable-local-file-access --disable-smart-shrinking --page-size A4 -T 0 -B 0 -L 0 -R 0 index-v2-be.html dynamic-kyc-v2.pdf
```

**Note**: Replace data blob with proper data in index_be.html before generating PDF
