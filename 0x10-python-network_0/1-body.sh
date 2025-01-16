#!/bin/bash
# This script sends a GET request to the URL and displays the body only for status code 200

response=$(curl -sL -w "%{http_code}" -o temp_response.txt "$1")
status_code="${response: -3}"

if [ "$status_code" -eq 200 ]; then
    cat temp_response.txt
fi

