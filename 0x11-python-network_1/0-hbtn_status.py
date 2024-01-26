#!/usr/bin/python3
"""
This script fetches the status from https://alx-intranet.hbtn.io/status using urllib.
"""

import urllib.request

def fetch_status():
    """
    Fetches the status from https://alx-intranet.hbtn.io/status and displays the body response.
    """
    url = 'https://alx-intranet.hbtn.io/status'

    with urllib.request.urlopen(url) as response:
        # Reading the content of the response
        html_content = response.read()

        # Decode the content assuming it's in UTF-8
        decoded_content = html_content.decode('utf-8')

        # Displaying the body of the response with tabulation
        print(f'- Body response:\n\t- type: {type(html_content)}\n\t- content: {decoded_content}')

if __name__ == "__main__":
    fetch_status()
