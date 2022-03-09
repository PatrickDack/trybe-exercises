import requests
from parsel import Selector

URL_BASE = (
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)

response = requests.get(URL_BASE)
selector = Selector(text=response.text)

title = selector.css("h1::text").get()

price = selector.css(".price_color::text").re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

image = URL_BASE + selector.css(".item img::attr(src)").get()

availability = selector.css(".product_main .availability::text").re_first("\d")

print(title, price, description, image, availability, sep=",")
