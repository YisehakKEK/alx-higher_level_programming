#!/bin/bash
# This script sends a DELETE request to the URL and displays the body of the response

response=$(curl -s -w "%{http_code}" -X DELETE "$1" -o response_body.txt)

# Check if the HTTP status code is 200, indicating success
status_code="${response: -3}"

if [ "$status_code" -eq 200 ]; then
    cat response_body.txt
else
    echo "HTTP Status Code: $status_code"
    echo "No body or unexpected response."
fi
