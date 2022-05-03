#크롤링한 데이터를 프레임으로 만들기
columns = ['name', 'ingredients', 'recipe', 'content_text']
df = pd.DataFrame(columns=columns)

#각 페이지별 '이름', '재료', 조리법', '내용' 정보를 데이터프레임으로 만들기
for page_url in page_urls:

    # 사이트의 html 구조에 기반하여 크롤링을 수행한다.
    req = requests.get(page_url)
    html = req.content
    soup = BeautifulSoup(html, 'lxml')
    contents_table = soup.find(name="article")
    title = contents_table.find_all('h1')[0]
    
    # 재료 정보가 없는 경우를 확인한다.
    if len(contents_table.find_all('ul')) > 0:
        ingredients = contents_table.find_all('ul')[0]
    else:
        ingredients = None
        
    content_paragraphs = contents_table.find_all(name="div", attrs={"class":"wiki-paragraph"})
    content_corpus_list = []
    
    # 조리법 정보가 없는 경우를 확인한다.
    if len(contents_table.find_all('ul')) > 0:
        recipe = contents_table.find_all('ul')[0]
    else:
        recipe = None
        
    content_paragraphs = contents_table.find_all(name="div", attrs={"class":"wiki-paragraph"})
    content_corpus_list = []
    
    # 페이지 내 요리 이름에서 개행 문자를 제거한 뒤 추출한다. 만약 없는 경우, 빈 문자열로 대체한다.
    if title is not None:
        row_name = title.text.replace("\n", " ")
    else:
        row_name = ""
    
    # 페이지 내 본문 정보에서 개행 문자를 제거한 뒤 추출한다. 만약 없는 경우, 빈 문자열로 대체한다.
    if content_paragraphs is not None:
        for paragraphs in content_paragraphs:
            if paragraphs is not None:
                content_corpus_list.append(paragraphs.text.replace("\n", " "))
            else:
                content_corpus_list.append("")
    else:
        content_corpus_list.append("")
        
    # 페이지 내 조리법정보에서 개행 문자를 제거한 뒤 추출한다. 만약 없는 경우, 빈 문자열로 대체한다.
    if category is not None:
        row_recipe = recipe.text.replace("\n", " ")
    else:
        row_recipe = ""
    
    # 모든 정보를 하나의 데이터 프레임에 저장한다.
    row = [row_name, row_ingredients, row_recipe, "".join(content_corpus_list)]
    series = pd.Series(row, index=df.columns)
    df = df.append(series, ignore_index=True)