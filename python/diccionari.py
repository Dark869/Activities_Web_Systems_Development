import requests
from bs4 import BeautifulSoup
import sys

URL = 'https://www.wordreference.com/definicion/arbol'

def regresar_html(url:str=URL) -> str:
    encabezados = {'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36'}
    try:
        respuesta = requests.get(url, headers=encabezados)
        if respuesta.status_code != 200:
            print('Problemas en la petición')
            exit(1)
        return respuesta.text
    except:
        print('Hubo un error inesperado')
        exit(1)

def regresar_hora(url:str=URL) -> str:

    html = regresar_html(url)
    sopa = BeautifulSoup(html, 'html.parser')
    divs = sopa.findAll('ol', class_='entry')
    for div in divs:
        print(div.get_text())
        print('\n')

if __name__ == '__main__':
    res = regresar_hora()
    