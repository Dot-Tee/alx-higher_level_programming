#!/bin/bash
# To get the content length and response size
curl -sI "$1" | awk '{print "Size of the response body: " $2 " bytes"}'
