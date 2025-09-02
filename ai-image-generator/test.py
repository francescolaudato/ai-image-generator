import requests

url = "http://127.0.0.1:7860/sdapi/v1/txt2img"
data = {
    "prompt": "un paesaggio futuristico al tramonto",
    "steps": 10,
    "width": 512,
    "height": 512
}

response = requests.post(url, json=data)
resp_json = response.json()
print(resp_json)  # <-- vedi tutto il JSON