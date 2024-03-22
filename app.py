from flask import Flask, render_template, request
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

def google_search(query):
    url = f"https://www.google.com/search?q={query}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        search_results = soup.find_all('div', class_='tF2Cxc')
        results = []
        for result in search_results:
            title = result.find('h3').get_text()
            link = result.find('a')['href']
            snippet = result.find('span', class_='aCOpRe').get_text()
            results.append({
                "title": title,
                "link": link,
                "snippet": snippet
            })
        return results
    else:
        return None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    query = request.form['query']
    results = google_search(query)
    if results:
        return render_template('search_results.html', query=query, results=results)
    else:
        return render_template('search_results.html', query=query, error=True)

if __name__ == '__main__':
    app.run()
