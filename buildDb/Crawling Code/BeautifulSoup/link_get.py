def crawl_cooking_recipe_page() :
    pages = []

    c = get_html('https://namu.wiki/w/%EC%9A%94%EB%A6%AC%EB%B2%95/%EC%A2%85%EB%A5%98')


    soup = BeautifulSoup(c)

    for td in soup('li') : # li 안의
        for a in td('a') : # a 태그 중에서
            if ('class' in a.attrs) : # a가 class 속성을 가지고 있을 경우


                print('표 안에 있는 a 태그의 {0} 레시피 목록 링크 {1}'.
                      format(a.get_text(), a['href'])) #a의 href 속성 안에 들어있는 링크
                      
               
#조리법 페이지 내 내부 링크 진입               
for td in soup('li') : # li 안의
    for a in td('a') : # a 태그 중에서
        if ('class' in a.attrs # a가 class 속성을 가지고 있고
            and 'wiki-link-internal' in a['class'] # class가 'wiki-link-internal'이다

            print("page {0} added".format(a['href']))
            pages.append('https://namu.wiki' + a['href']) # 본링크 + href 속성 안에 있는 내부 링크