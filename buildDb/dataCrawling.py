import selenium
from selenium import webdriver
import pandas as pd
from bs4 import BeautifulSoup

# ''''''''''''''''''''''''''''''''''''''''''''''''
# # load chrome driver
# ''''''''''''''''''''''''''''''''''''''''''''''''
# ## main page url
# main_url = 'http://www.lampcook.com/food_story/hansik_menu_story.php'
#
# ## driver get main_url
# driver = webdriver.Chrome(executable_path='C:/Project/chromedriver.exe')
# driver.get(url=main_url)
#
#
#
# ''''''''''''''''''''''''''''''''''''''''''''''''
# # crawling function
# ''''''''''''''''''''''''''''''''''''''''''''''''
# def crawling(soup):
#
#     def recipe_step(i, recipe):
#         ### access recipe text data & merge each recipe's steps
#         try:
#             step = soup.find(name='dl', attrs={'id': 'story_key_txt'}).find_all('p')[i].text
#             step = step.replace("\n\t", "")
#             recipe += [step]
#             recipe_step(i + 1, recipe)
#         except:
#             return recipe
#
#     ## food name
#     name = soup.find(name="h1", attrs={"class": "h1_title"}).text
#     print("name", name)
#
#     ## ingredient
#     ingredient = soup.find_all('dl')[0].find('dd').text
#     ingredient = ingredient.replace("\n\t", "")
#     print("ingredient", ingredient)
#
#     ## recipe
#     recipe = recipe_step(0, [])
#     print("recipe", recipe)
#
#     return name, ingredient, recipe
#
# ''''''''''''''''''''''''''''''''''''''''''''''''
# # data crawling
# ''''''''''''''''''''''''''''''''''''''''''''''''
# recipe_df = pd.DataFrame
#
# def access_eachRecipe(num, recipe_df):
#
#     ## BeautifulSoup get main_pageSource
#     mainPSource = driver.page_source
#     bs_main = BeautifulSoup(mainPSource, "lxml")
#
#     try:
#         ## access sub_page
#         sub_url = bs_main.find_all(name="div", attrs={"class":"div_shell_txt1"})[num].find("a")["href"]
#         print('http://www.lampcook.com' + sub_url)
#         driver.get('http://www.lampcook.com' + sub_url)
#
#         ## BeautifulSoup get sub_pageSource
#         subPSource = driver.page_source
#         bs = BeautifulSoup(subPSource, 'lxml')
#
#         try:
#             ## get data
#             name, ingredient, recipe = crawling(bs)
#             data = {'name':name, 'ingredient':ingredient, 'recipe':recipe}
#             print("data", data)
#             ## add data to dataFrame
#             recipe_df = recipe_df.append(data)
#
#             ## go back main_page & move to next sub_page
#             driver.get(main_url)
#             access_eachRecipe(num+1, recipe_df)
#
#         except:
#             ## go back main_page & move to next sub_page
#             driver.get(main_url)
#             access_eachRecipe(num + 1, recipe_df)
#
#     except:
#         return recipe_df
#
# access_eachRecipe(4, recipe_df)



driver = webdriver.Chrome(executable_path='C:/Project/chromedriver.exe')
driver.get('http://www.lampcook.com/food_story/hansik_menu_story_view.php?idx_no=2-11')
pageSource = driver.page_source
soup = BeautifulSoup(pageSource, 'lxml')

def recipe_step(i, recipe):
    ### access recipe text data & merge each recipe's steps

    try:
        step = soup.find(name='dl', attrs={'id': 'story_key_txt'}).find_all('p')[i].text
        step = step.replace("\n\t", "")
        recipe += [step]
        recipe_step(i + 1, recipe)

    except:
        print(recipe)
        return recipe

recipe = recipe_step(0, [])
print(recipe)


# ''''''''''''''''''''''''''''''''''''''''''''''''
# # close chrome driver
# ''''''''''''''''''''''''''''''''''''''''''''''''
# driver.implicitly_wait(time_to_wait=2)
# driver.close()