#!/bin/bash
# To get the content length and response size
curl -sI "$1" | grep -i "Content-Length" | awk '{print "Size of the response body: " $2 " bytes"}'
