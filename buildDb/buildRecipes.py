import pymysql
import csv

conn = pymysql.connect(host='localhost', user='root', password='apmsetup', db='youtube', charset='utf8')
curs = conn.cursor()
sql = "insert into user (id, name, region, insdt) values (%s, %s, %s, now())"
f = open('test.csv', 'r', encoding='utf-8')
rd = csv.reader(f)

for line in rd:
    curs.execute(sql, (line[0], line[1], line[2]))

conn.commit()
conn.close()
f.close()