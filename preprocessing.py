import xml.etree.ElementTree as ET
import requests

url = "https://headlines.yahoo.co.jp/rss/bengocom-dom.xml"

def xml2obj(url):

	res = requests.get(url)
	root = ET.fromstring(res.text)

	items = root[0][7:]

	data = {}
	data["data"] = []
	for i, item in enumerate(items):
		data["data"].append(dict(
			id = i,
			title = item[0].text,
			link = item[1].text,
			category = item[2].text,
			pubDate = item[3].text
		))

	return data


if __name__=='__main__':
	import json, pprint

	obj = xml2obj(url)
	f = open("./src/assets/bengoshi.json", "w")

	f.write(json.dumps(obj, indent=4))
	f.close()


