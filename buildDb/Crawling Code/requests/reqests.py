//requests 를 임포트하고 requests.get(url) 메서드 호출해서 html 코드를 얻어오기

import requests

def get_html(url) :
    html = ""
    resp = requests.get(url)

    if resp.status_code == 200 :
        html = resp.text

    return html