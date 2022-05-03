req = requests.get(page_urls[0])
html = req.content
soup = BeautifulSoup(html, 'lxml')
contents_table = soup.find(name="article")
name = contents_table.find_all('h1')[0]
ingredients = contents_table.find_all('ul')[0]
recipe = contents_table.find_all('ul')[0]
content_paragraphs = contents_table.find_all(name="div", attrs={"class":"wiki-paragraph"})
content_corpus_list = []

for paragraphs in content_paragraphs:
    content_corpus_list.append(paragraphs.text)
content_corpus = "".join(content_corpus_list)

print(name.text)
print("\n")
print(ingredients.text)
print("\n")
print(recipe.text)
print("\n")
print(content_corpus)