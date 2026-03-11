#!/bin/bash

rm -rf *.html *.css *.svg *.png *.js search *.md5
find . -maxdepth 1 -type d -name 'd[0-9a-f]' -exec rm -rf {} \;
