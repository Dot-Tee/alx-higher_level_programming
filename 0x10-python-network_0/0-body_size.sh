#!/bin/bash
# To get the content length and print the size
curl -sI "$1" | awk '/Content-Length/{print $2}'

